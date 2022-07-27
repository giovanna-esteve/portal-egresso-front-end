import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import CursoCard from "../components/curso-card";
import ContatoCard from "../components/contato-card";
import DepoimentoCard from "../components/depoimento-card";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import EgressoService from "../EgressoService";
import DepoimentoService from "../DepoimentoService";
import CursoEgressoService from "../CursoEgressoService";
import ContatoEgressoService from "../ContatoEgressoService";




function Egresso(){

    const { id } = useParams();

    const service = new EgressoService();
    const depoimentoService = new DepoimentoService();
    const cursoEgressoService = new CursoEgressoService();
    const contatoEgressoService = new ContatoEgressoService();

    const parseCursoEgressoToCurso = (ce) => {
        let c = {...ce.curso};
        c.dataInicio = ce.dataInicio
        c.dataConclusao = ce.dataConclusao
        return c;
    }

    const parseContatoEgressoToContato = (ce) => {
        let c = {...ce.contato};
        c.text = ce.descricao
        c.icon = ce.url_logo
        return c;
    }

    const [egresso, setEgresso] = useState({});
    const [depoimentos, setDepoimentos] = useState([]);
    const [cursos, setCursos] = useState([]);
    const [contatos, setContatos] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    

    useEffect( ()=>{
        service.busca_dados_pagina_egresso(id)
        .then( response => {
            setEgresso(response.data)
        }).catch (erro => {
            console.log(erro.response)
        })
        depoimentoService.listar(id)
        .then( response => {
            setDepoimentos(response.data);
        }).catch (erro => {
            console.log(erro.response)
        })
        cursoEgressoService.listar(id)
        .then( response => {
            setCursos(response.data.map(parseCursoEgressoToCurso));
        }).catch (erro => {
            console.log(erro.response)
        })
        contatoEgressoService.listar(id)
        .then( response => {
            setContatos(response.data.map(parseContatoEgressoToContato));
        }).catch (erro => {
            console.log(erro.response)
        })
        service.egressoAtual().then( response => {
            console.log(response.data);
            setCurrentUser(response.data);
        }).catch (erro => {
            console.log(erro.response)
        })

    }, [])

    var SliderDefaultsettings = {
        dots: true,
        infinite: false,
        // centerMode: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
    };


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
                                <h2>{egresso.nome}</h2>
                                <p>{egresso.resumo}</p>
                                <p>cpf: {egresso.cpf}</p>
                                <p>email: {egresso.email}</p>
                                <p>outros dados</p>
                                {
                                    currentUser.id == egresso.id && <Button href={`#/usuario/${currentUser.id}`}  variant="secondary">Minhas informações</Button>
                                }
                            </Col>
                        </Row>
                    </Container>

                </section>
                <section style={{"backgroundColor": "#ffffff"}} className='py-4'>
                    <Container className="pb-3">
                        <h2 style={{"paddingBottom": "2rem"}}>Meus Cursos</h2>
                        <Slider {...SliderDefaultsettings}>
                            {cursos.map((cur)=> { return <CursoCard curso={cur}/>})}
                        </Slider>
                    </Container>

                </section>
                <section style={{"backgroundColor": "#ffffff"}} className='py-4'>
                    <Container className="pb-3">
                        <h2 style={{"paddingBottom": "2rem"}}>Meus Contatos</h2>
                        <Slider {...SliderDefaultsettings}>
                            {contatos.map((cont)=> { return <ContatoCard contato={cont}/>})}
                        </Slider>
                    </Container>

                </section>
                <section style={{"backgroundColor": "#ffffff"}} className='py-4'>
                    <Container className="pb-3">
                        <h2 style={{"paddingBottom": "2rem"}}>Meus depoimentos</h2>
                        {depoimentos.map((dep)=> { return <DepoimentoCard depoimento={dep}/>})}
                    </Container>

                </section>


            <Footer/>
        </React.Fragment>
    )
}

export default Egresso;