import React, { useState, useEffect  } from 'react';
import { Container, Button, Row, Col, Form, Table} from "react-bootstrap";
import CursoEgressoService from '../../CursoEgressoService';
import CursoModal from './curso-modal';
import {btn_add, btn_edit} from '../../js/page_usuario/usuario'

import {confirmar_remover} from '../../js/page_usuario/curso'


function CursoUsuario(props){
    const [id_egresso] = useState(props.id_egresso);

    // lista os cursos do egresso
    const [state, setState] = useState({lista_curso_egresso: []});
    const service = new CursoEgressoService()
    useEffect(() => {
      service.listar(id_egresso)
        .then( response => {
            setState({lista_curso_egresso: response.data}) 
        }).catch (erro => {
            console.log(erro.response)
        })
    }, []);

    const lista_cursos = state.lista_curso_egresso.map(
        (item) => {

          var mes_inicio = (item.dataInicio[1]<10) ? '0'+item.dataInicio[1] : item.dataInicio[1];
          var dia_inicio = (item.dataInicio[2]<10) ? '0'+item.dataInicio[2] : item.dataInicio[2];
          var ano_inicio = item.dataInicio[0];
          var data_inicio = dia_inicio+'/'+mes_inicio+'/'+ano_inicio;

          var mes_conclusao = (item.dataConclusao[1]<10) ? '0'+item.dataConclusao[1] : item.dataConclusao[1];
          var dia_conclusao = (item.dataConclusao[2]<10) ? '0'+item.dataConclusao[2] : item.dataConclusao[2];
          var ano_conclusao = item.dataConclusao[0];
          var data_conclusao = dia_conclusao+'/'+mes_conclusao+'/'+ano_conclusao;

            return(
              <tr key={item.id}>
                  <td>{item.curso.nome}</td>
                  <td>{item.curso.nivel}</td>
                  <td>{data_inicio}</td>
                  <td>{data_conclusao}</td>
                  <td >
                  <div className="btn-group mx-3">
                  <CursoModal botao={btn_edit} id_egresso={id_egresso} curso_egresso={item.curso} data_inicio={ano_inicio+'-'+mes_inicio+'-'+dia_inicio}  data_conclusao={ano_conclusao+'-'+mes_conclusao+'-'+dia_conclusao}/>
                    </div>
                    <div className="btn-group ">
                        <button onClick={() =>{confirmar_remover(item.id)}} type="button" className="btn btn-primary">x</button>
                    </div> 
                </td>
              </tr>    
    )});
    return(
        <React.Fragment>

      <section>
        <Row className="pb-4 px-5 pt-3 mb-5" style={{ width: '60rem', marginLeft: 'auto', marginRight: 'auto', "backgroundColor": "#CE7762", color: '#000000', borderRadius: '10%'}}>
        <h4 className="py-3">Seus Cursos</h4>
        <Table striped borderless>
            <thead>
                <tr>
                    <th >Curso</th>
                    <th >Nível</th>
                    <th>Data inicio</th>
                    <th>Data conclusão</th>
                    <th width='160'  ></th>
                </tr>
            </thead>
            <tbody>
            {lista_cursos}
            </tbody>
        </Table>
        <div>
            <CursoModal botao={btn_add} status_disabled="" curso_egresso="" id_egresso={id_egresso}/>
        </div>
        </Row>
      </section>

        </React.Fragment>
    )
}

export default CursoUsuario;