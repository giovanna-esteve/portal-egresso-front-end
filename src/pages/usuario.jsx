import React from "react";
import { Container, Button, Row, Col, Form, Table} from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";

function Usuario(){

    return(
        <React.Fragment>
            <Header/>
            
                <section className="pt-5 " style={{"backgroundColor": "#B82601"}}>
                    <Container  className="pb-5 "  >
                        <Row className="pb-3 text-center">
                            <Col lg={12} md={5} sm={12}>
                                <img style={{ width: '15rem', height: '15rem', objectFit: 'cover', borderRadius: '50%'}} className=" " src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"alt=""/>
                            </Col>
                            <h3 style={{color: '#ffffff'}}>Nome Sobrenome da Silva</h3>
                        </Row>

                        <Row className="pb-4 px-5 pt-3 mb-5" style={{ width: '60rem', marginLeft: 'auto', marginRight: 'auto', "backgroundColor": "#CE7762", color: '#000000', borderRadius: '10%'}}>
                        <h4 className="py-3">Seus dados pessoais</h4>
                        <Row>
                            <Col lg={2}>
                                email
                            </Col>
                            <Col lg={10}>
                            <div style={{fontSize: '1.2rem'}}>email@exemplo.com</div>
                            </Col>
                            </Row>
                            <Row>
                            <Col lg={2}>
                                CPF
                            </Col>
                            <Col lg={10}>
                            <div style={{fontSize: '1.2rem'}}>123.456.789-12</div>
                            </Col>
                            </Row>
                            <Row >
                            <Col lg={2}>
                                Resumo
                            </Col>
                            <Col lg={10}>
                            <div style={{fontSize: '1.2rem'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida lorem at magna tristique vestibulum. Integer fringilla sem neque. Vivamus vel felis blandit, gravida lectus et, vestibulum tellus. Aenean in risus at metus varius tincidunt. Duis nec accumsan odio. 
                    </div>
                            </Col>
                            </Row>
                            <div className=" mt-5 ">
                                <Button  variant="secondary" href="#/editar-dados_pessoais" type="submit">editar informações</Button>
                            </div>
                        </Row>

                        <Row className="pb-4 px-5 pt-3 mb-5" style={{ width: '60rem', marginLeft: 'auto', marginRight: 'auto',  "backgroundColor": "#CE7762", color: '#000000', borderRadius: '10%'}}>
                        <h4 className="py-3">Seus Depoimentos</h4>
                        <Table striped bordered >
                            <tbody>
                                <tr>
                                    <td>Titulo do primeiro depoimento</td>
                                    <td>editar</td>
                                </tr>
                                <tr>
                                    <td>Titulo do segundo depoimento</td>
                                    <td>editar</td>
                                </tr>
                                <tr>
                                    <td>Titulo do terceiro depoimento</td>
                                    <td>editar</td>
                                </tr>
                            </tbody>
                        </Table>
                        <div className="  ">
                                <Button  variant="secondary" href="#/cadastro-senha" type="submit">+ novo</Button>
                            </div>
                        </Row>
                        <Row className="pb-4 px-5 pt-3 mb-5" style={{ width: '60rem', marginLeft: 'auto', marginRight: 'auto', "backgroundColor": "#CE7762", color: '#000000', borderRadius: '10%'}}>
                        <h4 className="py-3">Seus Cursos</h4>
                        <Table  >
                            <thead>
                                <tr>
                                    <th>Curso</th>
                                    <th>Nível</th>
                                    <th>Data inicio</th>
                                    <th>Data conclusão</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Titulo do primeiro Curso</td>
                                    <td>Nível do primeiro curso</td>
                                    <td>12/12/12</td>
                                    <td>12/12/12</td>
                                    <td>editar</td>
                                </tr>
                                <tr>
                                    <td>Titulo do segundo Curso</td>
                                    <td>Nível do segundo curso</td>
                                    <td>12/12/12</td>
                                    <td>12/12/12</td>
                                    <td>editar</td>
                                </tr>
                            </tbody>
                        </Table>
                        <div className="  ">
                                <Button  variant="secondary" href="#/cadastro-senha" type="submit">+ novo</Button>
                            </div>
                        </Row>
                        
                    </Container>
                </section>
                
            
            <Footer/>
        </React.Fragment>
    )
}


export default Usuario;