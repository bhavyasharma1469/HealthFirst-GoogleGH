import React from 'react';
import doc1 from './images/doc1.jpeg';
import doc2 from './images/doc2.jpeg';
import doc3 from './images/doc3.jpeg';
import doc4 from './images/doc4.jpeg';

const MeetOurDoc = () => {
  return (
    <section className="component" id='doc' style={{ backgroundColor: '#fff4e4', padding: '20px' }}>
      <div style={{margin : 'auto'}}>
      <h2>Meet Our Doctors</h2>
      <p>Meet the compassionate doctors who make HealthFirst possible. Our team is dedicated to providing high-quality care and personalized attention to each patient, ensuring you feel valued and supported throughout your healthcare journey.</p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <DoctorCard name="Dr. Parul Sharma" specialty="Cardiologist" icon = {doc1}/>
        <DoctorCard name="Dr. Ashima" specialty="Pulmonologist" icon = {doc2}/>
        <DoctorCard name="Dr. Rajesh Kumar" specialty="Orthopedic Surgeon" icon = {doc3}/>
        <DoctorCard name="Dr. Rajeev Sharma" specialty="Neurologist" icon = {doc4}/>
      </div>
      </div>
      
    </section>
  );
};

const DoctorCard = ({ name, specialty, icon}) => {
  return (
    <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px', textAlign: 'center', width: '350px' }}>
      <img src={icon} alt="Feature Icon" style={{ maxWidth: '100%', height: 'auto' }} />
      <h4 id = 'name'>{name}</h4>
      <p>{specialty}</p>
    </div>
  );
};

export default MeetOurDoc;
