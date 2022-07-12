import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import EgressoCard from "../components/egresso-card";
import CursoCard from "../components/curso-card";
import DepoimentoCard from "../components/depoimento-card";
import Header from "../components/header";
import {Button } from "react-bootstrap";
import Footer from "../components/footer";
import { render } from "@testing-library/react";
import EgressoService from "../EgressoService";

class Egressos extends React.Component{

    state={
        egressos : []
    }

    constructor() {
        super()
        this.service = new EgressoService()
    }

    componentDidMount() {
        this.service.listar()
        .then( response => {
            console.log(response.data)
            this.setState( {egressos : response.data} )
        }).catch (erro => {
            console.log(erro.response)
        })
    }

    

render(){
    return(
        <React.Fragment>
            <Header/>
            
                <section style={{"backgroundColor": "#f5f5f5"}}>
                <Container>
                    <h2 className="d-flex justify-content-center pt-5" style={{"paddingBottom": "2rem"}}>Egressos</h2>
                    <div className="d-flex container flex-wrap justify-content-around">
                        {this.state.egressos.map((egr)=> { return <EgressoCard egressos={egr}/>})}
                    </div>
                    <div className="d-flex justify-content-center pb-5">
                        <Button variant="secondary">Carregar Mais</Button>
                    </div>
                    </Container>
                </section>
                
            
            <Footer/>
        </React.Fragment>
    )
}

}


export default Egressos;