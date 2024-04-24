import { Link, useNavigate } from 'react-router-dom';
import bookAppointment from './images/bookAppointment.jpeg';
import Appointment from './Appointment'

const Book2 = () => {
  const navigate = useNavigate();
  return (
    <section className="component" id = 'book' style={{ backgroundColor: 'white'}}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' , marginTop : '1%'}}>
        <div style={{ flex : '1',  display: 'flex', flexDirection: 'column', marginLeft: '2%', marginRight: '2%' }}>
          <h2 style={{ marginBottom: '10px' }}>Book Your Appointment Now!</h2>
          <p style={{ marginBottom: '10px' }}>Taking charge of your health has never been easier with HealthFirst. Our online appointment booking system empowers you to schedule consultations with our experienced doctors at your convenience. We understand the importance of timely access to healthcare, and our platform ensures you receive the care you need when you need it most.</p>
          <button onClick={()=> navigate('/appointments')}>Book Now</button>
        </div>
        <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end' }}> 
          <img src={bookAppointment} alt="Appointment Image" style={{ maxWidth: '90%', height: 'auto' }}/>
        </div>
      </div>
    </section>
  );
};

export default Book2;
