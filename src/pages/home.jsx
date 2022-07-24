import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import EgressoCard from "../components/egresso-card";
import CursoCard from "../components/curso-card";
import DepoimentoCard from "../components/depoimento-card";
import Header from "../components/header";
import {Button, Col, Row } from "react-bootstrap";
import '../css/home.css'
import Footer from "../components/footer";
import imgLogin from '../images/image_login_2.svg'
import imgHome from '../images/imagem_home.svg'
import EgressoService from "../EgressoService";


function Home(){

    const egressoService = new EgressoService();

    const [egressos, setEgressos] = useState([]);

    useEffect( ()=>{
        egressoService.listar()
            .then( response => {
                console.log(response.data)
                setEgressos(response.data)
            }).catch (erro => {
                console.log(erro.response)
            })



    }, [])


    var SliderDefaultsettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    var SliderDepoimentosettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return(
        <React.Fragment>
            <Header/>

            <section className="pt-5 pb-5" >
            <Container >
                <Row>
                    <Col lg={6} md={6} sm={12} className="text-center ">
                        <img className="w-100" src={imgHome} alt=""/>
                    </Col>
                    <Col lg={5} md={6} sm={12} className="text-center mt-5">
                        <h2>Compartilhe suas experiências com a gente</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida lorem at magna tristique vestibulum. Integer fringilla sem neque. Vivamus vel felis blandit, gravida lectus et, vestibulum tellus. Aenean in risus at metus varius tincidunt. Duis nec accumsan odio. Proin at egestas ipsum. 
                        </p>
                        <div className="d-flex justify-content-center pt-5">
                            <Button href="#/cadastro" variant="primary">Cadastre-se</Button>
                        </div>
                    </Col>
                </Row>
                </Container>
            </section>
           
                <section className="pt-5 pb-5" style={{"backgroundColor": "#062F4F"}}>
                    <Container >
                    <h2 style={{"paddingBottom": "2rem", color: '#ffffff'}}>Egressos</h2>
                    <Slider {...SliderDefaultsettings}>
                        {egressos.map((egr)=> { return <EgressoCard egressos={egr}/>})}
                    </Slider>
                    <div className="d-flex justify-content-center pt-5">
                        <Button href="#/egressos" variant="primary">Ver mais</Button>
                    </div>
                    </Container>
                </section>
                <section className="pt-5 pb-5" >
                <Container >
                    <h2 style={{"paddingBottom": "2rem"}}>Cursos</h2>
                    <Slider {...SliderDefaultsettings}>
                        <CursoCard/>
                        <CursoCard/>
                        <CursoCard/>
                        <CursoCard/>
                        <CursoCard/>
                        <CursoCard/>
                    </Slider>
                    <div className="d-flex justify-content-center pt-5">
                        <Button href="#/cursos" variant="primary">Ver mais</Button>
                    </div>
                    </Container>
                </section>
                <section  className="pt-5 pb-5" style={{"backgroundColor": "#813772"}}>
                <Container >
                    <h2 style={{"paddingBottom": "2rem", color: "#ffffff"}}>Depoimentos</h2>
                    <Slider {...SliderDepoimentosettings}>
                        <DepoimentoCard/>
                        <DepoimentoCard/>
                        <DepoimentoCard/>
                        <DepoimentoCard/>
                        <DepoimentoCard/>
                        <DepoimentoCard/>
                    </Slider>
                    <div className="d-flex justify-content-center pt-5">
                        <Button href="#/depoimentos" variant="primary">Ver mais</Button>
                    </div>
                    </Container>
                </section>
          
            <Footer/>
        </React.Fragment>
    )
}


export default Home;