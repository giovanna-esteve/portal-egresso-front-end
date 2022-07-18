import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col, Form, Table} from "react-bootstrap";
import Swal from "sweetalert2"; 
import { useParams } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import EgressoService from '../EgressoService';
import ContatosUsuario from '../components/usuario/contatos-usuario';
import ContatoService from '../ContatoService';
import DepoimentosUsuario from '../components/usuario/depoimentos-usuario';
import EgressoModal from '../components/usuario/egresso-modal';
import CursoUsuario from '../components/usuario/curso-usuario';

function Usuario(){
    const { id } = useParams();

//------------------------- busca os dados do egresos ---------------------------------------------
    const [state, setState] = useState({dados_egresso:[]})
    const serviceEgresso = new EgressoService()
    
    useEffect(() => {
        serviceEgresso.buscar_dados_egresso(id)
        .then( response => {
            setState({dados_egresso: response.data})
        }).catch (erro => {
            console.log(erro.response)
        })
    }, []);
//-------------------------- // busca os dados do egresos ------------------------------------------

    const [btn_update, setBtnAdd] = useState({acao:"cadastrar", variant:"secondary",texto:"Atualizar"})

    function salvar_dados_egresso(id, nome, email, cpf, resumo){
        serviceEgresso.editar(id, nome, email, cpf, resumo)
          .then( response => {
            Swal.fire('Dados atualizados com sucesso!', '', 'success').then((result) => {
              window.location.reload();
            });
          }).catch (erro => {
              console.log(erro.response)
          })
    }
    return(
        <React.Fragment>
            <Header/>
    <div className="pt-5 " style={{"backgroundColor": "#B82601"}}>
        <Container  className="pb-5 "  >
            <section>
                <Row className="pb-3 text-center">
                    <Col lg={12} md={5} sm={12}>
                        <img style={{ width: '15rem', height: '15rem', objectFit: 'cover', borderRadius: '50%'}} className=" " src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"alt=""/>
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
                    <Col lg={2}>Resumo</Col>
                    <Col lg={10}><div style={{fontSize: '1.2rem'}}>{state.dados_egresso.resumo}</div></Col>
                </Row>
                <div className=" mt-5 ">
                    <EgressoModal botao={btn_update} dados_egresso={state.dados_egresso} funcao_salvar={salvar_dados_egresso} />
                </div>
                </Row>
            </section>
            <DepoimentosUsuario id_egresso={id}/>
            <CursoUsuario id_egresso={id}/>
        </Container>
    </div>
            <Footer/>
        </React.Fragment>
    )
}
export default Usuario;