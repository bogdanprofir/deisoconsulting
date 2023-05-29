import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

function Home() {
  return (
    <div className="acasa">
      
      {/* First Section */}
      <div className="first-section">
        <div className="text-section">
          <h1>Servicii pentru dezvoltarea afacerii tale</h1>
          <Link to="/contact ">
          <button className='consultanta'>Solicită o sesiune gratuită de consultanță</button></Link>
        </div>
        <img className="image" src="./daniela.jpg" alt="description" />
      </div>

      {/* Second Section */}
      <div className="second-section">
        <img className="image" src="./logoDeiso.png" alt="description" />
        <div className="text-section">
          <p>Am înființat S.C. DEISO CONSULTING SRL  în 2011, pe un proiect cu fonduri europene. Sunt  inginer constructor si doctor in inginerie seismica, fost cercetator stiintific in constructii. Mi-a placut sa invat mereu lucruri noi astfel ca am studiat  si  stiinte  economice, ceea ce m-a ajutat  sa pot scrie proiecte cu fonduri nerambursabile si sa ofer celor interesati  consultanta de management si servicii financiare. In pas cu cerintele societatii actuale dezvolt serviciile de promovare online atat pentru firmele la inceput de drum cat si pentru cele care doresc sa atraga mai multi clienti.</p>
          <p>S.C. DEISO CONSULTING SRL  acorda servicii specializate firmelor interesate de promovare in mediul online,  de dezvoltare a afacerii si de protectie a personalului si a patrimoniului propriu.</p>
        </div>
      </div>

      <div className='banner'> <h2>Serviciile noastre</h2></div>

      {/* Third Section */}
      <div className="third-section">
        
        <div className="column">
          <img src="./serviciiFinanciare.svg" alt="description" />
          <p>Consultanta de management</p>
        </div>
        <div className="column">
          <img src="./digitalMarketing.svg" alt="description" />
          <p>Marketing online</p>
        </div>
        <div className="column">
          <img src="./consultantaFinanciara.svg" alt="description" />
          <p>Consultanta fonduri europene</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
