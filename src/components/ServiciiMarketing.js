import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ServiciiMarketing.css'; 

const ServiciiMarketing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  }

  return (
    <div className="servicii-marketing">
      <img src="marketing-image.jpg" alt="Marketing" className="service-image" />
      <p className="service-text">Here is some text about the Marketing service...</p>
      <Button variant="primary" size="lg" onClick={handleClick} className="cta-button">
        Contacteaza-ne pentru Marketing
      </Button>
    </div>
  );
}

export default ServiciiMarketing;
