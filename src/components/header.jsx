import React from "react";
import {Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function Header(){
    return(
        <Navbar variant='dark' expand="lg" style={{"backgroundColor": "#813772"}}>
            <Container>
                <Navbar.Brand href="#/home">Portal do Egresso</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#/egressos">Egressos</Nav.Link>
                        <Nav.Link href="#/cursos">Cursos</Nav.Link>
                        <Nav.Link href="#/depoimentos">Depoimentos</Nav.Link>
                    </Nav>
                    <Nav className="">
                        <Nav.Link href="#/cadastro">Cadastrar</Nav.Link>
                        <Nav.Link href="#/login">Logar</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Header