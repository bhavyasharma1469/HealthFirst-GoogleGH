import { Link } from 'react-router-dom';
import knee2 from './images/knee2.jpeg';
import brainMRI from './images/brainMRI.jpeg';
import heartECG from './images/heartECG.jpeg';
import chestScan from './images/chestScan.jpeg';
import chatBot from './images/chatBot.jpeg';
import chatBotSexualHygiene from './images/chatBotSexualHygiene.jpeg';

const FeatureCard = ({ icon, text, link, desc }) => {
    return (
      <div id = 'explore' style={{ backgroundColor: 'white', padding: '20px', margin: '10px', textAlign: 'center', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', }}>
        <img src={icon} alt="Feature Icon" style={{ maxWidth: '100%', height: 'auto' }}/>
        <p id= 'name'>{text}</p>
        <p>{desc}</p>
        <Link to={link}>Explore</Link>
      </div>
    );
  };
  
  const Explore = () => {
    return (
      <section className="component" id = 'explore' style={{ backgroundColor: '#d1f0ed', padding: '20px'}}>
        <div style={{marginTop : '5%'}}>
        <h2>Explore the Features</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <FeatureCard icon={chatBotSexualHygiene} text="Sally" desc = "Sally is Your confidential advisor for sexual hygiene and wellness." link= '/sally' />
          <FeatureCard icon={chatBot} text="BayMac" desc = "BayMac is Your go-to chatbot for all your general health inquiries." link= '/baymac' />
          <FeatureCard icon={brainMRI} text="Brain X-Ray" desc = "Instant insights into brain health based on your uploaded X-ray images." link= '/brain' />
          <FeatureCard icon={knee2} text="Knee X-Ray" desc = "Real-time knee-related conditions predictions from your X-ray images." link= '/knee' />
          <FeatureCard icon={heartECG} text="Heart ECG" desc = " Rapid evaluations of heart health through analysis of your ECG readings." link= '/heart'/>
          <FeatureCard icon= {chestScan} text="Chest XRAY" desc = "Get immediate assessments of chest conditions using your X-ray scans." link= '/chest'/>
        </div>
        </div>
        
      </section>
    );
  };

export default Explore;



// Explore.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import Display from './Display'; // Import the Display component

// const Explore = () => {
//   return (
//     <div>
//       <h1>This is the Explore Page</h1>
//       <Link to="/display">Go to Display Page</Link>
//     </div>
//   );
// };

// export default Explore;
