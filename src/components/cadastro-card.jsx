import React from "react";
import { Button,Col, Container, Row, Form,  Card } from "react-bootstrap";
import '../css/cadastro.css'
import HeaderForms from "../components/header-forms";
import Footer from "../components/footer";
import SenhaCard from "../components/senha-card";

function CadastroCard(){
    return(
        <React.Fragment>
            
        


                <Container className="mb-5 mt-5 px-5 painel">
                
                <Card className="cards-cadastro">
                    <Card.Header>DADOS PESSOAIS</Card.Header>
                    <Card.Body>
                    <Form>
                    
                    <Col xs={7} >
                        <Form.Group controlId="formGridAddress1" className="mb-3">
                            <Form.Label>Nome Completo</Form.Label>
                            <Form.Control placeholder="" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword" className="mb-3">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control type="password" placeholder="000.000.000.00" />
                        </Form.Group>
                    </Col>
                    
                   
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Resumo</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Escreva seu resumo aqui ..."/>
                    </Form.Group>

                    </Form>
                    </Card.Body>
                </Card>
            </Container>

            <Container className="mb-5 px-5 ">
                <Card className="cards-cadastro">
                    <Card.Header>Profissão atual</Card.Header>
                    <Card.Body>
                    <Form>
                        <Row className="mb-3">
                            <Col xs={8} >
                                <Form.Group as={Col} controlId="">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col xs={4} >
                                <Form.Group as={Col} controlId="">
                                <Form.Label>Data inicio</Form.Label>
                                <Form.Control type="" placeholder="" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control type="" placeholder="" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="">
                                <Form.Label>Cargo</Form.Label>
                                <Form.Select defaultValue="">
                                    <option>Escolha uma opção...</option>
                                    <option>...</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col} controlId="">
                                <Form.Label>Faixa Salarial</Form.Label>
                                <Form.Select defaultValue="">
                                    <option>Escolha uma opção...</option>
                                    <option>...</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>

            <Container className="mb-5 px-5 ">
                <Card className="cards-cadastro">
                    <Card.Header>Curso</Card.Header>
                    <Card.Body>
                    <Form>
                        <Row className="mb-3">
                            <Col xs={8} >
                                <Form.Group as={Col} controlId="">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col xs={4} >
                                <Form.Group as={Col} controlId="">
                                <Form.Label>Data inicio</Form.Label>
                                <Form.Control type="" placeholder="" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={8} >
                                <Form.Group as={Col} controlId="">
                                <Form.Label>Nível</Form.Label>
                                <Form.Control type="" placeholder=" " />
                                </Form.Group>
                            </Col>
                            <Col xs={4} >
                                <Form.Group as={Col} controlId="">
                                <Form.Label>Data conclusão</Form.Label>
                                <Form.Control type="" placeholder="" />
                                </Form.Group>
                            </Col>
                        </Row>
                        
                        </Form>
                    </Card.Body>
                </Card>
                </Container>
                <div className="mb-3 mt-3 px-5">
                    <Button  variant="secondary" href="#/cadastro-senha" type="submit">Concluir cadastro</Button>
                </div>

        
        </React.Fragment>
    )
}

export default CadastroCard;