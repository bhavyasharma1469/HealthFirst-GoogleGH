// routes/appointments.js
const express = require('express');
const router = express.Router();
const { createAppointment } = require('../controllers/appointments');

// Route to handle appointment booking
router.post('/', createAppointment);

module.exports = router;
