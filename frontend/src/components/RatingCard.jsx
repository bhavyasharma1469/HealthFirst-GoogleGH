
import React from 'react';

const RatingCard = ({ rating, onRatingChange }) => {
  const handleRatingChange = (event) => {
    const newRating = parseInt(event.target.value);
    onRatingChange(rating.id, newRating);
  };

  return (
    <div className="rating-card">
      <h2>{rating.type}</h2>
      <p>Doctor: {rating.doctor}</p>
      <p>Treatment: {rating.treatment}</p>
      <p>Date: {rating.date}</p>
      <p>Time: {rating.time}</p>
      <label>
        Rate:
        <select value={rating.rating} onChange={handleRatingChange}>
          <option value={0}>No Rating</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </label>
    </div>
  );
};

export default RatingCard;
