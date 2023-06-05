import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import marketingDiagram from './marketingDiagram.svg';
import './ServiciiMarketing.css'; 

const ServiciiMarketing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  }

  return (
    <div className="marketing-container">
      <div className="marketing-content">
        <img src={marketingDiagram} alt="Marketing" className="marketing-image" />
        <Button variant="primary" size="lg" onClick={handleClick} className="marketing-button">
          Solicită o sesiune gratuită de consultanță
        </Button>
      </div>
      <p className="marketing-text">SC DEISO CONSULTING SRL este specializată în furnizarea de servicii de marketing digital de înaltă calitate. Portofoliul nostru extins include promovarea pe platforme populare cum ar fi YouTube, SEO și diverse rețele sociale, precum Facebook, Instagram și LinkedIn.</p>
      <p className='marketing-text'> În plus, echipa noastră de experți elaborează strategii de marketing personalizate, concepute pentru a atinge obiectivele specifice ale afacerii tale. Ne dedicăm să ajutăm companiile să își crească vizibilitatea online, să îmbunătățească angajamentul cu clienții și să stimuleze creșterea vânzărilor prin metode de marketing digital eficiente și inovatoare.</p>
    </div>
  );
  
}

export default ServiciiMarketing;
