import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import consultantaDiagrama from './consultantaDiagrama.svg';
import './ServiciiConsultanta.css'; 

const ServiciiConsultanta = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  }

  return (
    <div className="consultanta-container">
  <div className="consultanta-content">
    <img src={consultantaDiagrama} alt="Consultanta" className="consultanta-image" />
    <Button variant="primary" size="lg" onClick={handleClick} className="consultanta-button">
    Solicită o sesiune gratuită de consultanță
    </Button>
  </div>
  <p className="consultanta-text">Cu o experiență de peste 13 ani, SC DEISO CONSULTING SRL este un lider de încredere în domeniul consultanței pentru accesarea fondurilor europene. Am ajutat numeroase companii să navigheze cu succes prin procesul complex de solicitare și administrare a fondurilor europene, oferindu-le oportunitatea de a dezvolta și a îmbunătăți afacerile lor.</p>
  <p className="consultanta-text"> De asemenea, oferim servicii de consultanță financiară de înaltă calitate, ajutându-vă să elaborați o strategie de management eficientă, adaptată nevoilor specifice ale organizației dvs. Scopul nostru este să vă susținem în atingerea obiectivelor financiare și în creșterea durabilă a companiei dvs., asigurându-ne că sunteți bine poziționați pentru succes într-un mediu economic competitiv.</p>
</div>
  );
}

export default ServiciiConsultanta;
