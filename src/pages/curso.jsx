import React, { useState } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import CursoCard from "../components/curso-card";
import ContatoCard from "../components/contato-card";
import FaixaSalario from '../components/faixa-salario';
import ConcluintesAno from '../components/concluintes-ano';
import EgressoCard from '../components/egresso-card';
import DepoimentoCard from "../components/depoimento-card";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import EgressoService from "../EgressoService";




function Curso(){

    const { id } = useParams();

    // const service = new EgressoService()

    // const [state, setState] = useState({egressos : []});

    // function componentDidMount() {
    //     service.busca_dados_pagina_egresso(id)
    //     .then( response => {
    //         console.log(response.data)
    //         setState( {egressos : response.data} )
    //     }).catch (erro => {
    //         console.log(erro.response)
    //     })
    // }

    const SliderDefaultsettings = {
        dots: true,
        infinite: false,
        // centerMode: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
    };

    var egressos = [
        {id: 1, nome: "João"},
        {id: 2, nome: "José"},
        {id: 3, nome: "Giovanna"},
        {id: 4, nome: "Alana"},
        {id: 5, nome: "Mayrla"},
    ]

    // componentDidMount();

    return(
        <React.Fragment>
            <Header/>
                <section style={{"backgroundColor": "#B82601"}}>
                    <Container>
                        <Row>
                            <Col lg={4} md={5} sm={12} className="text-left mt-5 mb-3" >
                                <img style={{ width: '18rem', height: '18rem', objectFit: 'cover', borderRadius: '50%'}} className=" " src="https://img.freepik.com/premium-vector/computer-science-technology-logo-design-premium_610575-720.jpg?w=2000"alt=""/>
                            </Col>
                            <Col lg={7} className=" mt-5 mb-3" style={{color: '#ffffff'}}>
                                <h2>Ciência da Computação</h2>
                                <p>Descricao</p>
                                <p>outros dados</p>
                            </Col>
                        </Row>
                    </Container>

                </section>
                <section style={{"backgroundColor": "#ffffff"}} className='py-4'>
                    <Container className="pb-3">
                        <h2 style={{"paddingBottom": "2rem"}}>Egressos</h2>
                        <Slider {...SliderDefaultsettings}>
                            {egressos.map((egr)=> { return <EgressoCard egressos={egr}/>})}
                        </Slider>
                    </Container>

                </section>
                <section style={{"backgroundColor": "#ffffff"}} className='py-4'>
                    <Container className="pb-3">
                        <h2 style={{"paddingBottom": "2rem"}}>Estatisticas</h2>
                        <Row>
                            <Col>
                                <FaixaSalario/>
                            </Col>
                            <Col>
                                <ConcluintesAno/>
                            </Col>
                        </Row>
                    </Container>

                </section>
                <section style={{"backgroundColor": "#ffffff"}} className='py-4'>
                    <Container className="pb-3">
                        <h2 style={{"paddingBottom": "2rem"}}>Depoimentos</h2>
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

export default Curso;