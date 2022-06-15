import React from "react";
import { Button,Col, Container, Row, Form,  Card } from "react-bootstrap";
import '../css/cadastro.css'
import HeaderForms from "../components/header-forms";
import Footer from "../components/footer";
import CadastroCard from "../components/cadastro-card";

function Cadastro(){
    return(
        <React.Fragment>
            
            <HeaderForms/>
            <div style={{"backgroundColor": "#F3F3F3"}}>
            <Container className="p-5  " >
                <div className="d-flex justify-content-center">
                    <h1>Faça seu cadastro no portal</h1>

                </div>
                <CadastroCard/>

  
            </Container>
            </div>
            <Footer/>
        
        </React.Fragment>
    )
}

export default Cadastro;