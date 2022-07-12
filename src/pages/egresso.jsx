import React, { useState } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import CursoCard from "../components/curso-card";
import ContatoCard from "../components/contato-card";
import DepoimentoCard from "../components/depoimento-card";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import EgressoService from "../EgressoService";




function Egresso(){

    const { id } = useParams();

    const service = new EgressoService()

    const [state, setState] = useState({egressos : []});

    function componentDidMount() {
        service.busca_dados_pagina_egresso(id)
        .then( response => {
            console.log(response.data)
            setState( {egressos : response.data} )
        }).catch (erro => {
            console.log(erro.response)
        })
    }

    var SliderDefaultsettings = {
        dots: true,
        infinite: false,
        // centerMode: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
    };

    componentDidMount();

    return(
        <React.Fragment>
            <Header/>
                <section style={{"backgroundColor": "#B82601"}}>
                    <Container>
                        <Row>
                            <Col lg={4} md={5} sm={12} className="text-left mt-5 mb-3" >
                                <img style={{ width: '18rem', height: '18rem', objectFit: 'cover', borderRadius: '50%'}} className=" " src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"alt=""/>
                            </Col>
                            <Col lg={7} className=" mt-5 mb-3" style={{color: '#ffffff'}}>
                                <h2>{state.egressos.nome}</h2>
                                <p>Descricao</p>
                                <p>idade</p>
                                <p>outros dados</p>
                                <Button href="#/usuario" variant="secondary">Minhas informações</Button>
                            </Col>
                        </Row>
                    </Container>

                </section>
                <section style={{"backgroundColor": "#ffffff"}} className='py-4'>
                    <Container className="pb-3">
                        <h2 style={{"paddingBottom": "2rem"}}>Meus Cursos</h2>
                        <Slider {...SliderDefaultsettings}>
                            <CursoCard dataInicio='06/05/2015' dataConclusao='13/10/2020'/>
                            <CursoCard dataInicio='06/05/2015' dataConclusao='13/10/2020'/>
                            <CursoCard dataInicio='06/05/2015' dataConclusao='13/10/2020'/>
                            <CursoCard dataInicio='06/05/2015' dataConclusao='13/10/2020'/>
                        </Slider>
                    </Container>

                </section>
                <section style={{"backgroundColor": "#ffffff"}} className='py-4'>
                    <Container className="pb-3">
                        <h2 style={{"paddingBottom": "2rem"}}>Meus Contatos</h2>
                        <Slider {...SliderDefaultsettings}>
                            <ContatoCard icon='linkedin' text='@joao'/>
                            <ContatoCard icon='facebook' text='@joaoCarls'/>
                            <ContatoCard icon='instagran' text='@joao991'/>
                            <ContatoCard icon='twitter' text='@jao'/>
                        </Slider>
                    </Container>

                </section>
                <section style={{"backgroundColor": "#ffffff"}} className='py-4'>
                    <Container className="pb-3">
                        <h2 style={{"paddingBottom": "2rem"}}>Meus depoimentos</h2>
                        <DepoimentoCard/>
                        <DepoimentoCard/>
                        <DepoimentoCard/>
                        <DepoimentoCard/>
                        <DepoimentoCard/>
                    </Container>

                </section>


            <Footer/>
        </React.Fragment>
    )
}

export default Egresso;