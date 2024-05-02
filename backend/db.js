const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://:@cluster0.f3qlbuo.mongodb.net/HealthFirst");

// Schema for appointment booking
const appointmentSchema = mongoose.Schema({
    patient_email: String,
    date: Date,
    time: String,
    purpose: String
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

// Schema for rating a previous appointment
const ratingSchema = mongoose.Schema({
    appointment_id: String,
    patient_email: String,
    doctor_name: String,
    rating: Number,
    feedback: String
});

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = {
    Appointment,
    Rating
};
