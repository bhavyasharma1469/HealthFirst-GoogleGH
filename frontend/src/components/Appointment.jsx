import bookappoint from './images/bookappoint.jpg';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './AppointmentsPage.css'; // Import custom CSS for DatePicker
import Navbar from './Navbar';

const AppointmentsPage = () => {
  const [selectedOption, setSelectedOption] = useState(null); // Initially, no option is selected
  const [selectedDate, setSelectedDate] = useState(null); // Initially, no date is selected
  const [selectedTime, setSelectedTime] = useState(''); // Initially, no time is selected
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
 
  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleBookAppointment = () => {
    // Add logic to book the appointment
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const renderTimeOptions = () => {
    const options = [];
    for (let hour = 10; hour <= 19; hour++) {
      options.push(`${hour}:00`);
    }
    return options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ));
  };

  return (
    <div>
      <div className='navbar'>
            <Navbar />
            </div>
      <div className="card">
      <div className="content">
        <h2>Book Your Appointments</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus nemo, fuga eos eaque quibusdam quos enim culpa praesentium quam accusantium voluptatum est cum, id amet, doloremque nesciunt a quisquam pariatur!</p>
      </div>
      <div className="image">
        <img src={bookappoint} alt="Card" />
      </div>
    </div>

      {/* Four options for appointment */}
      <div className="options-container">
        <div className={`option-card ${selectedOption === 'Regular Checkup' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Regular Checkup')}>
          <h3>Regular Checkup</h3>
          {/* Add more details if needed */}
        </div>
        <div className={`option-card ${selectedOption === 'Dental' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Dental')}>
          <h3>Dental</h3>
          {/* Add more details if needed */}
        </div>
        <div className={`option-card ${selectedOption === 'Specialist' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Specialist')}>
          <h3>Specialist</h3>
          {/* Add more details if needed */}
        </div>
        <div className={`option-card ${selectedOption === 'General Follow Up' ? 'selected' : ''}`} onClick={() => handleOptionSelect('General Follow Up')}>
          <h3>General Follow Up</h3>
          {/* Add more details if needed */}
        </div>
      </div>

      {/* Date and time selection */}
      <div className="selection-container">
        {/* Date selection */}
        <div className="selection">
          <h3>Select Date</h3>
          <DatePicker selected={selectedDate} onChange={handleDateSelect} dateFormat="dd/MM/yyyy" className="date-picker" />
        </div>
        {/* Time selection */}
        <div className="selection">
          <h3>Select Time</h3>
          <select value={selectedTime} onChange={(e) => handleTimeSelect(e.target.value)} className="time-select">
            <option value="">Select Time</option>
            {renderTimeOptions()}
          </select>
        </div>
      </div>

      {/* Book button */}
      <div className="button-container">
        <button onClick={handleBookAppointment} className="book-button">Book Appointment</button>
      </div>

      {/* Modal for confirmation */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Appointment Booked</h2>
            <p>Appointment booked for {selectedDate && selectedTime && selectedOption ? `${selectedDate.toLocaleDateString()} at ${selectedTime} for ${selectedOption}` : ''}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentsPage;
