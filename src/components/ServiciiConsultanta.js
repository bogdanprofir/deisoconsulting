import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ServiciiConsultanta.css'; 

const ServiciiConsultanta = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  }

  return (
    <div className="servicii-consultanta">
      <img src="consultanta-image.jpg" alt="Consultanta" className="service-image" />
      <p className="service-text">Here is some text about the Consultanta service...</p>
      <Button variant="primary" size="lg" onClick={handleClick} className="cta-button">
        Contacteaza-ne pentru Consultanta
      </Button>
    </div>
  );
}

export default ServiciiConsultanta;
