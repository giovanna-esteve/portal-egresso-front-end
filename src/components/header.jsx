import React, {useState, useEffect} from "react";
import {Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import {isAuthenticated, logout} from '../Auth'
import UsuarioService from '../UsuarioService'
import EgressoService from '../EgressoService'

function Header(){

    const usuarioService = new UsuarioService(); 
    const egressoService = new EgressoService(); 

    const [egressoId, setEgressoId] = useState();
    const [adm, setAdm] = useState(false);
    const [userId, setUserId] = useState(false);

    useEffect( ()=>{
        usuarioService.usuarioAtual().then( response => {
            console.log(response.data);
            setAdm(response.data.adm == 1)
            setUserId(response.data.id)
        })
        egressoService.egressoAtual().then( response => {
            setEgressoId(response.data.id);
            console.log(response.data.id);
        })
    },[]);

    const sessionBtn = () => {
        if(isAuthenticated()){
            if(adm){
                return (
                    <React.Fragment>
                        <Button variant="primary" href="#/administrador" style={{marginRight: 10}}>Minha Conta</Button>
                        <Button variant="secondary" onClick={logout}>Logout</Button>
                    </React.Fragment>
                )
            }else{
                return (
                    <React.Fragment>
                        <Button variant="primary" href={`#/egresso/${egressoId}`} style={{marginRight: 10}}>Minha Conta</Button>
                        <Button variant="secondary" onClick={logout}>Logout</Button>
                    </React.Fragment>
                )
            }
        }else{
            return (
                <React.Fragment>
                    <Nav.Link href="#/cadastro">Cadastrar</Nav.Link>
                    <Nav.Link href="#/login">Logar</Nav.Link>
                </React.Fragment>
            )
        }
    }

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
                        {sessionBtn()}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Header