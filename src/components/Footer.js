import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Footer.css';


const Footer = () => (
  <footer className="footer">
    <Container>
      <Row>
        <Col xs={12} md={4}>
          <h5>DEISO CONSULTING SRL</h5>
          <p>Str. Lascar Catargi, nr.18A, Iasi </p>
          <p>CUI: 28872530</p>
          <p>ONRC: J22/1362/2011</p>
        </Col>

        <Col xs={12} md={4}>
          <h5>Contact Info</h5>
          <p>Email: office@deisoconsulting.eu</p>
          <p>Phone: 0753068689</p>
        </Col>

        <Col xs={12} md={4}>
          <h5>Social Media</h5>
          <p>
              <a href="https://www.facebook.com/marketer.daniela"><FaFacebook /> Facebook</a><br/>
              <a href="twitter.com"><FaTwitter /> Twitter</a><br/>
              <a href="https://www.linkedin.com/in/deiso-consulting/"><FaLinkedin /> LinkedIn</a>
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
