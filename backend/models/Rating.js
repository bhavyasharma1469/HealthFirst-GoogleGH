// models/Rating.js
const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  type: { type: String, required: true },
  doctor: { type: String, required: true },
  treatment: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  rating: { type: Number, default: 0 },
});

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;
