import React from "react";
import { Button,Col, Container, Row, Form,  Card } from "react-bootstrap";

function CursoCard (){
    return (

<Container className="mb-5 mt-5 px-5 ">
                    <div  className=" px-5 ">
                    <Card className="cards-cadastro">
                        <Card.Header>Crie uma senha</Card.Header>
                        <Card.Body>
                        <Form className=" px-5 ">
                            <Form.Group controlId="formGridAddress1" className="mb-3">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control placeholder="" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
                                <Form.Label>Repita a senha</Form.Label>
                                <Form.Control type="email" placeholder="" />
                            </Form.Group>
                        </Form>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="mb-3 mt-3 px-5">
                    <Button  variant="secondary" href="#/login" type="submit">Cadastrar senha</Button>
                </div>
                </Container>
    )
}


export default CursoCard;