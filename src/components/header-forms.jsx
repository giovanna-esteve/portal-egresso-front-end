import React from "react";
import {Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function HeaderForms(){
    return(
        <Navbar variant='dark' expand="lg" style={{backgroundColor: "#062F4F"}}>
            <Container>
                <Navbar.Brand href="#/home">Portal do Egresso</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default HeaderForms