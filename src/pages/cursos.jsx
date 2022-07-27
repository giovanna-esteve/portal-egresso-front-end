import React, {useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import EgressoCard from "../components/egresso-card";
import CursoCard from "../components/curso-card";
import DepoimentoCard from "../components/depoimento-card";
import Header from "../components/header";
import {Button } from "react-bootstrap";
import Footer from "../components/footer";
import CursoService from "../CursoService"

function Cursos(){

    const cursoService = new CursoService();
    const [cursos, setCursos] = useState([]);


    useEffect( ()=>{
        cursoService.listar()
            .then( response => {
                console.log(response.data)
                setCursos(response.data)
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
            <Container className="d-flex justify-content-center pb-5 p-5">

                <section>
                    <h2 className="d-flex justify-content-center " style={{"paddingBottom": "2rem"}}>Cursos</h2>
                    <div className="d-flex container flex-wrap justify-content-around">

                        {cursos.map((cur)=> { return <CursoCard curso={cur}/>})}
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <Button variant="primary">Carregar Mais</Button>
                    </div>
                </section>

            </Container>
            <Footer/>
        </React.Fragment>
    )
}


export default Cursos;