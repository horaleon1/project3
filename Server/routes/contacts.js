const express = require('express');
const router = express.Router();

// GET /contacts
// Get all users contacts ( own contacts )
// Private page
router.get('/', (req,res) => {
  res.send('Get all contacts');
});

// POST /contacts
// Add new contact
// Private page
router.post('/', (req,res) => {
  res.send('Add contact');
});

// PUT /contacts/:id
// Update contact
// Private page
router.put('/:id', (req,res) => {
  res.send('Update contact');
});
// DELETE /contacts/:id
// Delete contact
// Private page
router.delete('/:id', (req,res) => {
  res.send('Delete contact');
});



module.exports = router;