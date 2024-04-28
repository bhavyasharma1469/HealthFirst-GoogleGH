import React from 'react';
import { Link } from 'react-router-dom';
import serviceChatbot from './images/serviceChatbot.jpeg';
import rating from './images/rating.jpeg';
import diseasePredict from './images/diseasePredict.jpeg';
import appointment from './images/appointment.jpeg';
// import img1 from './images/';
// import img1 from './images/';

const OurServicesSection = () => {
  return (
    <section className="component" id='services' style={{ backgroundColor: 'white', padding: '20px', paddingTop :'0px'}}>
      <div style={{marginTop : '2%'}}>
 
      <h2>Our Services</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        <ServiceCard title="ChatBots" link="/sally" icon = {serviceChatbot}/>
        <ServiceCard title="Disease Prediction" link="/knee" icon = {diseasePredict} />
        <ServiceCard title="Appointment Booking" link="/appointments" icon = {appointment} />
        <ServiceCard title="Rating" link="/ratings" icon = {rating} />
      </div>
      </div>
      
    </section>
  );
};

const ServiceCard = ({ title, link, icon }) => {
  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '10px', textAlign: 'center',  width: '200px'  }}>
      <img src={icon} alt="Feature Icon" style={{ maxWidth: '80%', height: 'auto' }} />
      <h4 id = 'name'>{title}</h4>
      <Link to={link} id = 'links'>Learn More</Link>
    </div>
  );
};

export default OurServicesSection;
