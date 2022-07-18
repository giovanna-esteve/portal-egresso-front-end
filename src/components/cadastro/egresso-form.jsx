import React, { useState } from 'react';
import { Button,Col, Container, Row, Form,  Card } from "react-bootstrap";
import '../../css/cadastro.css'

function EgressoForm(props){

    function guardar_variaveis_inseridas(var_nome, var_email, var_cpf, var_resumo){
        props.setEgresso({nome:var_nome, 
                email:var_email,
                cpf:var_cpf,
                resumo:var_resumo})
    }
    
    return(
        <React.Fragment>

<Container className="mb-5 mt-5 px-5 painel">
    <Card className="cards-cadastro">
        <Card.Header>DADOS PESSOAIS</Card.Header>
        <Card.Body>
        <Form>
            <Col>
                <Form.Group controlId="formGridAddress1" className="mb-3">
                    <Form.Label>Nome Completo</Form.Label>
                    <Form.Control type="text" value={props.egresso.nome} onChange={(e) => guardar_variaveis_inseridas(e.target.value,props.egresso.email,props.egresso.cpf,props.egresso.resumo)}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={props.egresso.email} onChange={(e) => guardar_variaveis_inseridas(props.egresso.nome,e.target.value,props.egresso.cpf,props.egresso.resumo)}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword" className="mb-3">
                    <Form.Label>CPF</Form.Label>
                    <Form.Control value={props.egresso.cpf} onChange={(e) => guardar_variaveis_inseridas(props.egresso.nome,props.egresso.email,e.target.value,props.egresso.resumo)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Resumo</Form.Label>
                    <Form.Control as="textarea" rows={3} value={props.egresso.resumo} onChange={(e) => guardar_variaveis_inseridas(props.egresso.nome,props.egresso.email,props.egresso.cpf,e.target.value)}/>
                </Form.Group>
            </Col>
        </Form>
        </Card.Body>
    </Card>
</Container>
        
        </React.Fragment>
    )
}

export default EgressoForm;