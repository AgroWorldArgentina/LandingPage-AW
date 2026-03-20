import React from 'react'
import { Nav, Navbar} from 'react-bootstrap';
import logoAgroW from '../assets/logoagroworld.png';
import '../styles/headerComponent.css';

export default function HeaderComponent() {
  return (
     <Navbar id='headerContainer' expand="lg">
        <div id='logoContainer'>
            <img src={logoAgroW} alt="logoAgroWorld" width={"50px"}/>
        </div>
      <div id='navbarContainer'> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className='navLinks'>¿Quiénes Somos?</Nav.Link>
            <Nav.Link href="#" className='navLinks'>¿Qué Ofrecemos?</Nav.Link>
            <Nav.Link href="#" className='navLinks'>¿Cómo funciona?</Nav.Link>
            <Nav.Link href="#" className='navLinks'>Ofrecé tu lote</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}
