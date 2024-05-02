// controllers/ratings.js
const { Rating } = require('../models');

const getRatings = async (req, res) => {
  try {
    const ratings = await Rating.find();
    res.json({ success: true, ratings });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to retrieve ratings' });
  }
};

const updateRating = async (req, res) => {
  try {
    const { id } = req.params;
    const { rating } = req.body;
    const updatedRating = await Rating.findByIdAndUpdate(id, { rating }, { new: true });
    if (!updatedRating) {
      return res.status(404).json({ success: false, message: 'Rating not found' });
    }
    res.json({ success: true, rating: updatedRating });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to update rating' });
  }
};

module.exports = { getRatings, updateRating };
