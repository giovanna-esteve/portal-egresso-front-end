import React from "react";
import {Button,Col, Container, Row, Form } from "react-bootstrap";
import iconEnvelope from '../images/icon_envelope.svg'
import imgLogin from '../images/image_login_2.svg'
import '../css/login.css'

function FormRecuperarSenha(){
    return (
            <Col lg={4} md={7} sm={12} className="text-center mt-5">
                <img className="icon-img" src={iconEnvelope} alt="icon"/>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button variant="primary" href="#/login" type="submit">Enviar nova senha</Button>
                    </div>
                    <div className="mt-3">
                        <a href="#/login"><small className="reset">Voltar</small></a>
                    </div>
                </Form>
            </Col>
    )
}


export default FormRecuperarSenha;