import React from 'react';
import patient1 from './images/patient1.jpeg';
import patient2 from './images/patient2.jpeg';
import patient3 from './images/patient3.jpeg';
import patient4 from './images/patient4.jpeg';

const PatientsSaySection = () => {
  return (
    <section className="component" id = 'patients' style={{ backgroundColor: '#d1f0ed', padding: '20px',paddingLeft : '3%', paddingRight : '4%' }}>
      <div style={{ marginTop: 'auto' }}>
        <h2>What Our Patients Say</h2>
        <p>Hear what our patients have to say about their experiences with HealthFirst. From convenient online appointments to compassionate care, our commitment to excellence shines through in their feedback.</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '5%' }}>
          <PatientCard name="Yash Chopra" treatment="Cardiology" image={patient1} text="BayMac's advice is always on point and super convenient." />
          <PatientCard name="Sara Jain" treatment="Pediatrics" image={patient2} text="Sally made discussing sexual health easy and comfortable. Highly recommend!" />
          <PatientCard name="Liam Page" treatment="Orthopedics" image={patient3} text="HealthFirst's knee prediction was spot-on, and booking online was a breeze!" />
          <PatientCard name="Bhumika" treatment="Dermatology" image={patient4} text="Thanks to HealthFirst, I caught a potential issue early with their chest prediction. Top-notch service!" />
        </div>
      </div>
    </section>
  );
};

const PatientCard = ({ name, treatment, image, text }) => {
  return (
    <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px', textAlign: 'center', width: '350px' }}>
      <img src={image} alt="Patient" style={{ maxWidth: '100%', height: 'auto' }} />
      <h4>{name}</h4>
      {/* <p>Treatment: {treatment}</p> */}
      <p>{text}</p>
    </div>
  );
};

export default PatientsSaySection;
