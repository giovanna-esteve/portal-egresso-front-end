import { formControlLabelClasses } from '@mui/material';
import React, { useState, useEffect  } from 'react';
import Swal from "sweetalert2"; 
import { Container, Button, Row, Col, Form, Table} from "react-bootstrap";
import ContatoEgressoService from '../../ContatoEgressoService';
import DepoimentoService from '../../DepoimentoService';
import DepoimentoModal from './depoimento-modal';
import CursoEgressoService from '../../CursoEgressoService';
import CursoModal from './curso-modal';


function CursoUsuario(props){
//----------------------------------------------------------------------
const [state, setState] = useState({lista_curso_egresso: []});
const service = new CursoEgressoService()

    useEffect(() => {
      service.listar(props.id_egresso)
        .then( response => {
            setState({lista_curso_egresso: response.data}) 
        }).catch (erro => {
            console.log(erro.response)
        })
    }, []);
//----------------------------------------------------------------------
  const [btn_add, setBtnAdd] = useState({acao:"cadastrar", variant:"secondary",texto:"+ novo"})
  const [btn_edit, setBtnEdit] = useState({acao:"editar", variant:"dark",texto:"editar"})

    function salvarCursoEgresso(id_curso, data_inicio, data_conclusao)  {
      var curso_egresso = {id_egresso: props.id_egresso, id_curso:id_curso, data_inicio: data_inicio, data_conclusao: data_conclusao};
      service.cadastrar(curso_egresso)
        .then( response => {
            Swal.fire('Curso salvo com sucesso!', '', 'success').then((result) => {
                window.location.reload();
            });
        }).catch (erro => {
            console.log(erro.response)
            alert(erro.response.data)
        })
    }
    function confirmarRemover(id_curso_egresso)  {
      console.log(id_curso_egresso)
        Swal.fire({  
          title: 'Deletar curso?',  
          type: 'warning',  
          showCancelButton: true,  
          confirmButtonColor: '#3085d6',  
          cancelButtonColor: '#d33',  
          confirmButtonText: 'Yes!'  
        }).then((result) => {  
          if (result.isConfirmed){
            remover(id_curso_egresso)
          }
        });
      }
      function remover(id_curso_egresso)  {
        service.remover(id_curso_egresso)
          .then( response => {
            Swal.fire('Curso removido.', '', 'success').then((result) => {
              window.location.reload();
            }); 
          }).catch (erro => {
              console.log(erro.response)
              alert(erro.response.data)
          })
      }

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
                  <CursoModal botao={btn_edit} funcao_salvar={salvarCursoEgresso} curso_egresso={item.curso} data_inicio={ano_inicio+'-'+mes_inicio+'-'+dia_inicio}  data_conclusao={ano_conclusao+'-'+mes_conclusao+'-'+dia_conclusao}/>
                    </div>
                    <div className="btn-group ">
                        <button onClick={() =>{confirmarRemover(item.id)}} type="button" className="btn btn-primary">x</button>
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
            <CursoModal botao={btn_add} curso_egresso="" funcao_salvar={salvarCursoEgresso}/>
        </div>
        </Row>
      </section>

        </React.Fragment>
    )
}

export default CursoUsuario;