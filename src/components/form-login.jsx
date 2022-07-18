import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {Button,Col, Container, Row, Form } from "react-bootstrap";
import iconUser from '../images/icon_user.svg'
import imgLogin from '../images/image_login_2.svg'
import AuthService from '../AuthService';
import '../css/login.css'



function FormLogin(){

    const navigate = useNavigate(); 

    const service = new AuthService()

    const [password, setPassword] = useState('');

    const handleChangePassword = event => {
        setPassword(event.target.value);
    }

    const [email, setEmail] = useState('');

    const handleChangeEmail = event => {
        setEmail(event.target.value);
    }
    
    const login = () => {
        service.autenticar(email, password)
        .then( response => {
            console.log(response);
            navigate("/home");
        }).catch (erro => {
            console.log(erro.response)
        })
    }

    return (
        <Col lg={4} md={7} sm={12} className="text-center mt-5">
            <img className="icon-img" src={iconUser} alt="icon"/>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" onChange={handleChangeEmail}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" onChange={handleChangePassword}/>
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="primary"  onClick={login}>Login</Button>
                </div>
                <div className="mt-3">
                    <a href="#/cadastro"><small className="reset">Não estou cadastrado</small></a> ||  
                    <a href="#/recuperar_senha"><small className="reset">Esqueci a senha</small></a>
                </div>
            </Form>
        </Col>
    )
}


export default FormLogin;