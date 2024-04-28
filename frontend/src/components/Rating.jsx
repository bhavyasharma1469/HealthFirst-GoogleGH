import React, { useState } from 'react';
import RatingCard from './RatingCard';
import './ratings.css'; // Import CSS file for styling
import Navbar from './Navbar';

const RatingsPage = () => {
  const [ratings, setRatings] = useState([
    // Array of appointments with details
    {
      id: 1,
      type: 'Check-up',
      doctor: 'Dr. Smith',
      treatment: 'General Check-up',
      date: '2024-04-24',
      time: '10:00 AM',
      rating: 0, // Initial rating
    },

    {
      id: 2,
      type: 'Dental Check-up',
      doctor: 'Dr. Johnson',
      treatment: 'Dental Cleaning',
      date: '2024-04-25',
      time: '11:00 AM',
      rating: 0,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRatingChange = (id, rating) => {
    const updatedRatings = ratings.map(item =>
      item.id === id ? { ...item, rating } : item
    );
    setRatings(updatedRatings);
  };

  const handleRatingSubmit = () => {

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <Navbar></Navbar>
      
        <div className="card">
          <div className="page-heading">
          <h1>Rate Your Previous Appointments</h1>
          </div>
        </div>
        
      <div className="ratings-container">
        {ratings.map(rating => (
          <RatingCard key={rating.id} rating={rating} onRatingChange={handleRatingChange} />
        ))}
      </div>

      <div className="button-container">
        <button onClick={handleRatingSubmit} className="book-button">Rate Appointment</button>
      </div>
      

      {/* Modal for confirmation */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Rating Updated</h2>
            <p>Your rating has been updated.</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RatingsPage;
