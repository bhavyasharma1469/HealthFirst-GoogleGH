// controllers/appointments.js
const { Appointment } = require('../models');

// Controller function to handle appointment booking
const createAppointment = async (req, res) => {
  try {
    const { patient_email, date, time, purpose } = req.body;
    const appointment = await Appointment.create({ patient_email, date, time, purpose });
    res.status(201).json({ success: true, appointment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to book appointment' });
  }
};

const updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const { patient_email, date, time, purpose } = req.body;
    const updatedAppointment = await Appointment.findByIdAndUpdate(id, { patient_email, date, time, purpose }, { new: true });
    if (!updatedAppointment) {
      return res.status(404).json({ success: false, message: 'Appointment not found' });
    }
    res.json({ success: true, appointment: updatedAppointment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to update appointment' });
  }
};

const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json({ success: true, appointments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to retrieve appointments' });
  }
};

module.exports = { createAppointment, updateAppointment, getAppointments };
