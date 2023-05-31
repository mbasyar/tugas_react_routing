import React from 'react'
import HomePage from './page1/homepage'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Home() {
  return (
    <div>
        <Navbar style={{backgroundColor:"rgb(41, 3, 255)"}} variant="dark">
               <Container>
                    <Navbar.Brand href="./">Rulzz</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="film">MOVIE</Nav.Link>
                    <Nav.Link href="sports">SPORTS</Nav.Link>
                    <Nav.Link href="health">HEALTH</Nav.Link>
                    <NavDropdown title="Portofolio" id="basic-nav-dropdown">
                         <NavDropdown.Item href="#action/3.1">Rumah Kopi</NavDropdown.Item>
                         <NavDropdown.Item href="#action/3.2">Cafee</NavDropdown.Item>
                         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
               </Container>
          </Navbar> 
      <HomePage />
    </div>
        
   
  )
}

export default Home;