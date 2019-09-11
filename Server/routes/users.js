const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require("express-validator/check"); // password validator

const User = require("../models/User");

// POST /users
// Register a user
// Public page
router.post(
  "/",
  [
    check("name", "name is required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 8 or more characters"
    ).isLength({ min: 8 })
  ],
  async (req, res) => {
    // res.send(req.body); //data sent to the router (here email, password, name) // to use req.body we need middleware bodyparser
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json( {errors: errors.array() });
    }

    const { name, email, password } = req.body;
    //check if user already exists
    try {
      let user = await User.findOne({ email })
      if(user){
        return res.status(400).json({ msg: 'User already exists' })
      }
      //create a new USer
      user = new User({
        name,
        email,
        password
      });
      //encrypt the password with bycrpyt
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);
      
      await user.save();

      return res.send('User saved');

    } catch(err){
      console.error(err.message);
      res.status(500).send('Error Server');
    }
  }
);

module.exports = router;
