// routes/ratings.js
const express = require('express');
const router = express.Router();
const { getRatings, updateRating } = require('../controllers/ratings');

// Route to retrieve ratings
router.get('/', getRatings);

// Route to update rating
router.put('/:id', updateRating);

module.exports = router;
