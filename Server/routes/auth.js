const express = require('express');
const router = express.Router();

// GET /auth
// GEt logged in user
// Privatepage
router.get('/', (req,res) => {
  res.send('Get logged in user');
});

// POST /auth
// Auth user and get token
// Public
router.post ('/', (req,res) => {
  res.send('Log in user');
});

module.exports = router;