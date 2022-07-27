import React, {useEffect, useState} from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import EgressoCard from "../components/egresso-card";
import CursoCard from "../components/curso-card";
import DepoimentoCard from "../components/depoimento-card";
import Header from "../components/header";
import {Button } from "react-bootstrap";
import Footer from "../components/footer";
import DepoimentoService from "../DepoimentoService";

function Depoimentos(){

    const depoimentoService = new DepoimentoService();

    const [depoimentos, setDepoimentos] = useState([]);


    useEffect( ()=>{

        depoimentoService.recentes()
            .then( response => {
                console.log(response.data)
                setDepoimentos(response.data)
            }).catch (erro => {
                console.log(erro.response)
            })

    }, [])


    return(
        <React.Fragment>
            <Header/>
            
                <section>
                <Container>
                    <h2 className="d-flex justify-content-center pt-5"  style={{"paddingBottom": "2rem"}}>Depoimentos</h2>
                    <div className="d-flex container flex-wrap justify-content-center pb-3">
                        {depoimentos.map((dep)=> { return <DepoimentoCard depoimento={dep}/>})}
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