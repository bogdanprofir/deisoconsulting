import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact'; 
import Servicii from './components/Servicii';
import ServiciiConsultanta from './components/ServiciiConsultanta';
import ServiciiMarketing from './components/ServiciiMarketing';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
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
