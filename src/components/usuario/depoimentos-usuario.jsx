import { formControlLabelClasses } from '@mui/material';
import React, { useState, useEffect  } from 'react';
import Swal from "sweetalert2"; 
import { Container, Button, Row, Col, Form, Table} from "react-bootstrap";
import ContatoEgressoService from '../../ContatoEgressoService';
import DepoimentoService from '../../DepoimentoService';
import DepoimentoModal from './depoimento-modal';


function DepoimentosUsuario(props){
//--------------------- busca os depoimentos do egresso ---------------------------------------
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
//----------------------- // busca os depoimentos do egresso -------------------------------------

    const [btn_add, setBtnAdd] = useState({acao:"cadastrar", variant:"secondary",texto:"+ novo"})
    const [btn_edit, setBtnEdit] = useState({acao:"editar",texto:"editar"})

    function cadastrarDepoimento(id, texto)  {
        serviceDepoimento.cadastrar(texto, props.id_egresso)
        .then( response => {
            Swal.fire('Depoimento cadastrado com sucesso!', '', 'success').then((result) => {
                window.location.reload();
            });
        }).catch (erro => {
            console.log(erro.response)
        })
    }
    function editarDepoimento(id, texto)  {
        serviceDepoimento.editar(id, texto)
          .then( response => {
            Swal.fire('Depoimento editado com sucesso!', '', 'success').then((result) => {
              window.location.reload();
            });
          }).catch (erro => {
            console.log(erro.response)
            alert(erro.response.data)
          })
    }
    function confirmarRemover(id_depoimento)  {
        Swal.fire({  
          title: 'Deletar contato?',  
          type: 'warning',  
          showCancelButton: true,  
          confirmButtonColor: '#3085d6',  
          cancelButtonColor: '#d33',  
          confirmButtonText: 'Yes!'  
        }).then((result) => {  
          if (result.isConfirmed){
            removerDepoimento(id_depoimento)
          }
        });
      }
      function removerDepoimento(id_depoimento)  {
        serviceDepoimento.remover(id_depoimento)
          .then( response => {
            Swal.fire('Depoimento removido.', '', 'success').then((result) => {
              window.location.reload();
            }); 
          }).catch (erro => {
              console.log(erro.response)
          })
      }

    const lista_depoimentos = state.depoimentos.map(
        (depoimento) => {
            return(
                <tr>
                  <td>{depoimento.texto}</td>
                    <td className='style="text-align:center;"'>
                    <div className="btn-group mx-3">
                    <DepoimentoModal botao={btn_edit} depoimento={depoimento} funcao_salvar={editarDepoimento} />
                    </div>
                    <div className="btn-group ">
                        <button onClick={() =>{confirmarRemover(depoimento.id)}} type="button" className="btn btn-danger">Remover</button>
                    </div> 
                  </td>
                </tr>   
    )});
    
    return(
        <React.Fragment>

      <section>
        <Row className="pb-4 px-5 pt-3 mb-5" style={{ width: '60rem', marginLeft: 'auto', marginRight: 'auto',  "backgroundColor": "#CE7762", color: '#000000', borderRadius: '10%'}}>
        <h4 className="py-3">Seus Depoimentos</h4>
        <Table striped bordered >
            <tbody>
            {lista_depoimentos}
            </tbody>
        </Table>
        <div className="  ">
                <DepoimentoModal botao={btn_add} depoimento="" funcao_salvar={cadastrarDepoimento} />
            </div>
        </Row>
      </section>

        </React.Fragment>
    )
}

export default DepoimentosUsuario;