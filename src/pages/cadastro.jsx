import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { Button,Col, Container, Row, Form,  Card } from "react-bootstrap";
import '../css/cadastro.css'
import HeaderForms from "../components/header-forms";
import Footer from "../components/footer";
import CadastroCard from "../components/cadastro-card";
import CadastroSenha from './cadastro-senha';
import EgressoForm from "../components/cadastro/egresso-form";
import CursoForm from '../components/cadastro/curso-form';
import ProfissaoForm from '../components/cadastro/profissao-form';
import ContatoForm from '../components/cadastro/contato-form';
import EgressoService from '../EgressoService';
import SenhaCard from '../components/cadastro/senha-card';

function Cadastro(){

    const service = new EgressoService()

    const [egresso, setEgresso] = useState({})
    const [cursoEgresso, setCursoEgresso] = useState({})
    const [profissao, setProfissao] = useState({})
    const [contatoEgresso, setContatoEgresso] = useState({})
    const [usuario, setUsuario] = useState({})

    function salvar_cadastro(){
        var obj1 = {egresso};
        var obj2 = { cursoEgresso};
        var obj3 = { profissao};
        var contatoEgressoList = contatoEgresso.lista;
        var obj4 = { contatoEgressoList};
        var obj5 = { usuario};
        var dados_cadastro = Object.assign({}, obj1, obj2, obj3, obj4, obj5);
    
        console.log(dados_cadastro)

        service.cadastrarEgresso(dados_cadastro)
        .then( response => {
            console.log(response.data)
        }).catch (erro => {
            console.log(erro.response)
            alert(erro.response.data)
        })
    }

    const [senhasShow, setSenhasShow] = React.useState(false);
    let tela;
    let botao;
    if (senhasShow) {
        tela = <SenhaCard setUsuario={setUsuario} egresso={egresso} salvar_cadastro={salvar_cadastro} setSenhasShow={setSenhasShow}/>;
        botao = <Button  variant="secondary" onClick={() => salvar_cadastro()}>nao tocar</Button>;
    } else {
        tela = <div><EgressoForm egresso={egresso} setEgresso={setEgresso} />
                <CursoForm cursoEgresso={cursoEgresso} setCursoEgresso={setCursoEgresso}/>
                <ProfissaoForm profissao={profissao} setProfissao={setProfissao}/>
                <ContatoForm contatoEgresso={contatoEgresso}  setContatoEgresso={setContatoEgresso}/></div>;
        botao = <Button  variant="secondary" onClick={() => setSenhasShow(true)}>Continuar</Button>;
        
    }
    return(
        <React.Fragment> 
        <HeaderForms/>

        <div style={{"backgroundColor": "#F3F3F3"}}>

        <Container className="p-5  " >
            <div className="d-flex justify-content-center">
                <h1>Faça seu cadastro no portal</h1>
            </div>
                {tela}
            <div className="mb-3 mt-3 px-5">
                {botao}
            </div>
        </Container>

        </div>

        <Footer/>
        </React.Fragment>
    )
}
export default Cadastro;