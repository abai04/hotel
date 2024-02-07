import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

function Header({rus, setRus}) {
    const navigate = useNavigate()
  return (
    <Navbar bg="success" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")} href="#home">Hotel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/register")}>{rus ? "Регистрация" : "Sign up"}</Nav.Link>
            <Nav.Link onClick={() => navigate("/login")} href="#log">{rus ? "Вход" : "Log in"}</Nav.Link>
            <Nav.Link href="#link">{rus ? "Ссылка" : "Link"}</Nav.Link>
            <Button onClick={() => setRus(!rus)}>{rus ? "Eng" : "Rus"}</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;