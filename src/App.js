import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact'; 
import Servicii from './components/Servicii';
import ServiciiConsultanta from './components/ServiciiConsultanta';
import ServiciiMarketing from './components/ServiciiMarketing';
import CookieComponent from './components/CookieComponent'; 

function App() {
  const [cookieConsent, setCookieConsent] = useState(false);

  const handleAccept = () => {
    setCookieConsent(true);
    localStorage.setItem('cookieConsent', 'accepted');
  }

  const handleDecline = () => {
    setCookieConsent(true);
    localStorage.setItem('cookieConsent', 'declined');
  }

  useEffect(() => {
    const consentStatus = localStorage.getItem('cookieConsent');
    if (consentStatus) {
      setCookieConsent(true);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <CookieComponent onAccept={handleAccept} onDecline={handleDecline} cookieConsent={cookieConsent} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/services" element={<Servicii />} />
          <Route path="/services/consultanta" element={<ServiciiConsultanta />} />
          <Route path="/services/marketing" element={<ServiciiMarketing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
