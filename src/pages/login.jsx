import React from "react";
import { Button,Col, Container, Row, Form } from "react-bootstrap";
import FormLogin from "../components/form-login";
import FormRecuperarSenha from "../components/form-recuperar_senha";
import imgLogin from '../images/image_login_2.svg'


function Login(){
    return(
        <React.Fragment>
            <Container className="mt-5 login">
                <Row>
                    <Col lg={7} md={5} sm={12} className="text-center mt-5">
                        <img className="w-99" src={imgLogin} alt=""/>
                    </Col>
                    <FormLogin/>
                </Row> 
            </Container>
        </React.Fragment>
    )
}

export default Login;