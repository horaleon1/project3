const express = require('express');
const router = express.Router();

// POST /users
// Register a user
// Public page
router.post('/', (req,res) => {
  res.send('Register a user');
});

module.exports = router;