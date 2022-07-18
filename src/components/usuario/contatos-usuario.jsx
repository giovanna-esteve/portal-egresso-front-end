import { formControlLabelClasses } from '@mui/material';
import React, { useState, useEffect  } from 'react';
import { Button,Col, Container, Row, Form,  Card } from "react-bootstrap";
import ContatoEgressoService from '../../ContatoEgressoService';
import ContatoModal from './contato-model';


function ContatosUsuario(props){
//----------------------------------------------------------------------
const [state, setState] = useState({contatos: []});
const [contatoEgresso, setContatoEgresso] = useState({lista: []})
//const [state, setState] = useState({contatoEgresso: []});
const serviceContatos = new ContatoEgressoService()

    useEffect(() => {
        serviceContatos.listar(props.id_egresso)
        .then( response => {
            var aux = []
            response.data.map(
                (contatoEgresso)=>{
                    var id = contatoEgresso.contato.id
                    var egresso_id = contatoEgresso.egresso.id
                    var nome = contatoEgresso.contato.nome
                    var descricao = contatoEgresso.descricao
                    aux.push({egresso_id:egresso_id, contato_id:id, nome:nome, descricao:descricao})
                }
            ) 
            // console.log("contatos")
            // console.log({contatos: response.data})
            // console.log("ContatoEgresso")
            // console.log({lista: aux})
            setState({contatos: response.data})
            setContatoEgresso({lista: aux})
            //setState({contatoEgresso: aux}) 
        }).catch (erro => {
            console.log(erro.response)
        })
    }, []);
//----------------------------------------------------------------------


function cadastrarContatos()  {
    console.log(contatoEgresso.lista)
}
function cadastra()  {
    serviceContatos.cadastrar(contatoEgresso.lista)
    .then( response => {
      
        // Swal.fire('Depoimento cadastrado com sucesso!', '', 'success').then((result) => {
        //     window.location.reload();
        // });
    }).catch (erro => {
        console.log(erro.response)
    })
}



const [btn_add, setBtnAdd] = useState({acao:"cadastrar", variant:"secondary",texto:"+ novo"})
const [btn_edit, setBtnEdit] = useState({acao:"editar",texto:"editar"})

    const lista_contatos = contatoEgresso.lista.map(
        (contato) => {
            if(contato.descricao != ""){
                return(<div>
                    <Row>
                        <Col lg={2}>{contato.nome}</Col>
                        <Col lg={10}><div style={{fontSize: '1.2rem'}}>{contato.descricao}</div></Col>
                    </Row>
                    <br/>
    </div>)}});

    return(
        <React.Fragment>

        <section>
            <Row className="pb-4 px-5 pt-3 mb-5" style={{ width: '60rem', marginLeft: 'auto', marginRight: 'auto', "backgroundColor": "#CE7762", color: '#000000', borderRadius: '10%'}}>
            <h4 className="py-3">Seus contatos</h4>
            {lista_contatos}
            <div className=" mt-5 ">
                <ContatoModal botao={btn_add} contatoEgresso={contatoEgresso.lista} setContatoEgresso={setContatoEgresso} contatos={state.contatos}  funcao_salvar={cadastrarContatos} />
            </div>
            </Row>
        </section>

        </React.Fragment>
    )
}

export default ContatosUsuario;