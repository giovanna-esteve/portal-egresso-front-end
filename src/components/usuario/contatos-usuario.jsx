import { formControlLabelClasses } from '@mui/material';
import React, { useState, useEffect  } from 'react';
import Swal from "sweetalert2"; 
import { Button,Col, Container, Row, Form,  Card, Table} from "react-bootstrap";
import ContatoEgressoService from '../../ContatoEgressoService';
import ContatoModal from './contato-model';


function ContatosUsuario(props){
//----------------------------------------------------------------------
const [state, setState] = useState({lista_contato_egresso: []});
const service = new ContatoEgressoService()

    useEffect(() => {
      service.listar(props.id_egresso)
        .then( response => {
            setState({lista_contato_egresso: response.data}) 
        }).catch (erro => {
            console.log(erro.response)
        })
    }, []);
//----------------------------------------------------------------------


    function salvarContatoEgresso(contatoEgressoList)  {
        service.cadastrar(contatoEgressoList)
            .then( response => {
                Swal.fire('Contato salvo com sucesso!', '', 'success').then((result) => {
                    window.location.reload();
                });
            }).catch (erro => {
                console.log(erro.response)
                alert(erro.response.data)
            })
    }

    const [btn_add, setBtnAdd] = useState({acao:"cadastrar", variant:"dark",texto:"editar os contatos"})

    const lista_contatos = state.lista_contato_egresso.map(
        (item) => {
            return(
            <tr>
                <th width="160" >{item.contato.nome}:</th>
                <td >{item.descricao}:</td>
            </tr>   
    )});

    return(
        <React.Fragment>

        <section>
            <Row className="pb-4 px-5 pt-3 mb-5" style={{ width: '60rem', marginLeft: 'auto', marginRight: 'auto', "backgroundColor": "#CE7762", color: '#000000', borderRadius: '10%'}}>
            <h4 className="py-3">Seus Contatos</h4>
            <div className='d-flex justify-content-center mb-3' >
            <Table striped borderless className="w-75">
                <tbody>
                {lista_contatos}
                </tbody>
            </Table>
            </div>
            <div>
                <ContatoModal botao={btn_add} id_egresso={props.id_egresso} funcao_salvar={salvarContatoEgresso} lista_contato_egresso={state.lista_contato_egresso} />
            </div>
            </Row>
        </section>

        </React.Fragment>
    )
}
export default ContatosUsuario;