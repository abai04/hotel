import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    const [rus, setRus] = useState(false)
  return (
    <Navbar bg="success" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Hotel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">{rus ? "Sign up" : "Регистрация"}</Nav.Link>
            <Nav.Link href="#link">{rus ? "Link" : "Ссылка"}</Nav.Link>
            <Button onClick={() => setRus(!rus)}>switch</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;