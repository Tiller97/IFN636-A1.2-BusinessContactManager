const express = require('express');
const router = express.Router();

const { createContact, getContacts, updateContact, deleteContact, } = require('../controllers/contactController');

const { protect } = require('../middleware/authMiddleware');

router.route('/')
  .get(protect, getContacts)
  .post(protect, createContact);

router.put('/:id', protect, updateContact);
router.delete('/:id', protect, deleteContact);

module.exports = router;