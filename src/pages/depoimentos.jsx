import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import EgressoCard from "../components/egresso-card";
import CursoCard from "../components/curso-card";
import DepoimentoCard from "../components/depoimento-card";
import Header from "../components/header";
import {Button } from "react-bootstrap";
import Footer from "../components/footer";

function Depoimentos(){


    return(
        <React.Fragment>
            <Header/>
            
                <section>
                <Container>
                    <h2 className="d-flex justify-content-center pt-5"  style={{"paddingBottom": "2rem"}}>Depoimentos</h2>
                    <div className="d-flex container flex-wrap justify-content-center pb-3">
                        <DepoimentoCard/>
                        <DepoimentoCard/>
                        <DepoimentoCard/>
                        <DepoimentoCard/>
                        <DepoimentoCard/>
                        <DepoimentoCard/>
                        <DepoimentoCard/>
                        <DepoimentoCard/>
                        <DepoimentoCard/>
                        <DepoimentoCard/>
                        <DepoimentoCard/>
                        <DepoimentoCard/>
                    </div>
                    <div className="d-flex justify-content-center pb-5">
                        <Button variant="primary">Carregar Mais</Button>
                    </div>
                    </Container>
                </section>
            
            <Footer/>
        </React.Fragment>
    )
}


export default Depoimentos;