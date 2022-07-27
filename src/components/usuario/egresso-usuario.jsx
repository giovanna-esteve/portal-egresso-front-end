import React, { useState, useEffect  } from 'react';
import { Container, Button, Row, Col, Form, Table} from "react-bootstrap";
import EgressoService from '../../EgressoService';
import EgressoModal from '../../components/usuario/egresso-modal';
import img_man from '../../images/img_man.svg'

import {btn_update } from '../../js/page_usuario/usuario'

function EgressoUsuario(props){
    const [state, setState] = useState({dados_egresso:[]})
    const serviceEgresso = new EgressoService()
    
    useEffect(() => {
        serviceEgresso.buscar_dados_egresso(props.id_egresso)
        .then( response => {
            setState({dados_egresso: response.data})
        }).catch (erro => {
            console.log(erro.response)
        })
    }, []);
    
    return(
        <React.Fragment>
            <section>
                <Row className="pb-3 text-center justify-content-md-center">
                    <Col lg={12} md={5} sm={12} style={{backgroundColor:'white', borderRadius: '50%', height: '15rem', width:'15rem '}}>
                        <img style={{  height: '15rem', objectFit: 'cover', borderRadius: '50%'}} className=" " src={img_man} alt=""/>
                    </Col>
                    <h3 style={{color: '#ffffff'}}>{state.dados_egresso.nome}</h3>
                </Row>
            </section>
            <section>
                <Row className="pb-4 px-5 pt-3 mb-5" style={{ width: '60rem', marginLeft: 'auto', marginRight: 'auto', "backgroundColor": "#CE7762", color: '#000000', borderRadius: '10%'}}>
                <h4 className="py-3">Seus dados pessoais</h4>
                <Row>
                    <Col lg={2}>Nome</Col>
                    <Col lg={10}><div style={{fontSize: '1.2rem'}}>{state.dados_egresso.nome}</div></Col>
                </Row>
                <Row>
                    <Col lg={2}>Email</Col>
                    <Col lg={10}><div style={{fontSize: '1.2rem'}}>{state.dados_egresso.email}</div></Col>
                </Row>
                <Row >
                    <Col lg={2}>CPF</Col>
                    <Col lg={10}><div style={{fontSize: '1.2rem'}}>{state.dados_egresso.cpf}</div></Col>
                </Row>
                <Row >
                    <Col lg={2}>Resumo</Col>
                    <Col lg={10}><div style={{fontSize: '1.2rem'}}>{state.dados_egresso.resumo}</div></Col>
                </Row>
                <div className=" mt-5 ">
                    <EgressoModal botao={btn_update} dados_egresso={state.dados_egresso}/>
                </div>
                </Row>
            </section>
        </React.Fragment>
    )
}

export default EgressoUsuario;