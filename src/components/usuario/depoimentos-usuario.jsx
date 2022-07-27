import React, { useState, useEffect  } from 'react';
import { Container, Button, Row, Col, Form, Table} from "react-bootstrap";
import DepoimentoService from '../../DepoimentoService';
import DepoimentoModal from './depoimento-modal';
import {btn_add, btn_edit } from '../../js/page_usuario/usuario'

import {confirmar_remover} from '../../js/page_usuario/depoimento'

function DepoimentosUsuario(props){

    // lista de depoimentos do egresso
    const [state, setState] = useState({depoimentos: []});
    const serviceDepoimento = new DepoimentoService()
    useEffect(() => {
        serviceDepoimento.listar(props.id_egresso)
        .then( response => {
            setState({depoimentos: response.data}) 
        }).catch (erro => {
            console.log(erro.response)
        })
    }, []);

    const lista_depoimentos = state.depoimentos.map(
        (depoimento) => {
          var mes = (depoimento.data[1]<10) ? '0'+depoimento.data[1] : depoimento.data[1];
          var dia = (depoimento.data[2]<10) ? '0'+depoimento.data[2] : depoimento.data[2];
          var ano = depoimento.data[0];
          var data_formatada = dia+'/'+mes+'/'+ano;
            return(
                <tr>
                  <td className='text-center'>{data_formatada}</td>
                  <td>{depoimento.texto}</td>
                  <td >
                      <div className="btn-group mx-3">
                      <DepoimentoModal botao={btn_edit} depoimento={depoimento} acao="editar" id_egresso={props.id_egresso}/>
                      </div>
                      <div className="btn-group ">
                          <button onClick={() =>{confirmar_remover(depoimento.id)}} type="button" className="btn btn-primary">x</button>
                      </div> 
                  </td>
                </tr>   
    )});
    
    return(
        <React.Fragment>

      <section>
        <Row className="pb-4 px-5 pt-3 mb-5" style={{ width: '60rem', marginLeft: 'auto', marginRight: 'auto',  "backgroundColor": "#CE7762", color: '#000000', borderRadius: '10%'}}>
        <h4 className="py-3">Seus Depoimentos</h4>
        <Table striped borderless>
            <thead>
                <tr>
                    <th className='text-center' width='110'>Criado</th>
                    <th>Depoimento</th>
                    <th width='160'></th>
                </tr>
            </thead>
            <tbody>
            {lista_depoimentos}
            </tbody>
        </Table>
        <div className="  ">
                <DepoimentoModal botao={btn_add} depoimento="" acao="cadastrar" id_egresso={props.id_egresso} />
            </div>
        </Row>
      </section>

        </React.Fragment>
    )
}

export default DepoimentosUsuario;