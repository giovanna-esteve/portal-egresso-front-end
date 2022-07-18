import React, { useState, useEffect  } from 'react';
import { Button,Col, Container, Row, Form,  Card } from "react-bootstrap";
import '../../css/cadastro.css';
import ContatoService from '../../ContatoService';

function ContatoForm(props){
//-----------produz lista de contatos-------------------
    const [state, setState] = useState({contatos: []});
    const serviceContato = new ContatoService()
    useEffect(() => {
        serviceContato.listar()
        .then( response => {    
            var aux = []
            response.data.map(
                (contato)=>{
                    aux.push({id:contato.id, descricao:""})
                }
            )
            setState({contatos: response.data})
            props.setContatoEgresso({lista: aux})
        }).catch (erro => {
            console.log(erro.response)
        })
    }, []);
//----------- // produz lista de contatos---------------

    function guardar_variaveis_inseridas(valor,contato_id){
        var aux = []
        state.contatos.map(
            (contato,index)=>{
                var descricao = props.contatoEgresso.lista[index].descricao;
                if(contato_id === contato.id) descricao = valor;
                aux.push({contato_id:contato.id, descricao:descricao})
            }
        )  
        props.setContatoEgresso({lista: aux})     
    }

    const listar_contato = state.contatos.map(
        contato => { return(<div>
            <div class="form-group row">
                <label  class="col-sm-3 col-form-label text-center">{contato.nome}</label>
                <div class="col-sm-9">
                    <Form.Control onChange={(e) => guardar_variaveis_inseridas(e.target.value, contato.id)}/>
                </div>
            </div>
            <br/>
    </div>)});

    return(
        <React.Fragment>

<Container className="mb-5 px-5 ">
    <Card className="cards-cadastro">
        <Card.Header>Contatos (opcional)</Card.Header>
        <Card.Body>
            <Form>
                {listar_contato}
            </Form>
        </Card.Body>
    </Card>
</Container>

        </React.Fragment>
    )
}

export default ContatoForm;