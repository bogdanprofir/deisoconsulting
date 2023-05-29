import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './Navbar.css';

function NavBar() {
  return (
    <Navbar className='navbar' collapseOnSelect expand="lg" variant="dark">
    <Container>
      <Navbar.Brand as={Link} to="/"><img src='/logoDeiso.png' className="navLogo"  alt='Logo' /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Acasa</Nav.Link>
          <NavDropdown title="Servicii" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/services/consultanta">Servicii Consultanta</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/services/marketing">Servicii Marketing</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/products">Produse</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavBar;
