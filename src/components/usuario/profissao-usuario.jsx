import { formControlLabelClasses } from '@mui/material';
import React, { useState, useEffect  } from 'react';
import Swal from "sweetalert2"; 
import { Button,Col, Container, Row, Form,  Card, Table} from "react-bootstrap";
import ProfEgressoService from '../../ProfEgressoService';
import ProfissaoModal from './profissao-modal';
import {btn_add, btn_edit} from '../../js/page_usuario/usuario'
import {confirmar_remover} from '../../js/page_usuario/profissao'

function ProfissaoUsuario(props){
    const [id_egresso] = useState(props.id_egresso);

    // lista as profissões do egresso
    const [state, setState] = useState({profissoes: []});
    const service = new ProfEgressoService()

    useEffect(() => {
      service.listar(id_egresso)
        .then( response => {
            console.log(response.data)
            setState({profissoes: response.data})
        }).catch (erro => {
            console.log(erro.response)
        })
    }, []);

    function confirmarRemover(id_profissao)  {
          Swal.fire({  
            title: 'Deletar profissão?',  
            type: 'warning',  
            showCancelButton: true,  
            confirmButtonColor: '#3085d6',  
            cancelButtonColor: '#d33',  
            confirmButtonText: 'Yes!'  
          }).then((result) => {  
            if (result.isConfirmed){
              remover(id_profissao)
            }
          });
        }
        function remover(id_profissao)  {
          service.remover(id_profissao)
            .then( response => {
              Swal.fire('Profissão removida com sucesso.', '', 'success').then((result) => {
                window.location.reload();
              }); 
            }).catch (erro => {
                console.log(erro.response)
                alert(erro.response.data)
            })
        }

    const lista_profissoes = state.profissoes.map(
        (item) => {
            return(
                <div>
                   
                <Container>
                <Row className="p-4" style={{   color: '#000000', borderRadius: '10%', border:'5px solid #FFD8CF'}}>
                <div className='col-10' >

                    <div className='row pt-1 mb-2 ' style={{"backgroundColor": "#FFD8CF",  borderRadius:'10%' }}>
                        
                            <div className='col-2'>
                                <strong>Empresa:</strong>
                            </div>
                            <div className='col-10' >
                                <p>{item.empresa}</p>
                            </div>
                        
                    </div>

                    <div className='row mb-2 ' style={{"backgroundColor": "#FFD8CF",  borderRadius:'10%' }}>
                        
                            <div className='col-2 p-2' >
                                <strong>Descrição:</strong>
                            </div>
                            <div className='col-10 p-2' >
                                <p>{item.descricao}</p>
                            </div>
                       
                    </div>

                        <div className='row' >
                           
                            <div className='col-6' >
                                <div className='row pt-1' style={{"backgroundColor": "#FFD8CF",  borderRadius:'10%' }}>
                                    <div  className='col-3'  >
                                        <strong>Cargo:</strong>
                                    </div>
                                    <div className='col-9'   >
                                        <p>{item.cargo.nome}</p>
                                    </div>
                                </div>
                            </div>
                            
                           
                            <div className='col-6' >
                                <div className='row pt-1' style={{"backgroundColor": "#FFD8CF",  borderRadius:'10%', marginLeft:'1px' }}>
                                    <div  className='col-5 ' >
                                        <strong>Fx Salarial:</strong>
                                    </div>
                                    <div className='col-7'>
                                        <p>{item.faixaSalario.descricao}</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                </div>
                
                <div className='col-2  text-center mt-4'>
                    <ProfissaoModal botao={btn_edit} profissoes={item} cargo={item.cargo} salario={item.faixaSalario} acao='editar' id_egresso={id_egresso}/>
                    <br/>
                    <button onClick={() =>{confirmar_remover(item.id)}} type="button" className="btn btn-primary">apagar</button>
                </div>
            </Row>
        </Container>
        <br/>
    </div>
    )});

    return(
        <React.Fragment>

        <section>
            <Row className="pb-4 px-5 pt-3 mb-5" style={{ width: '60rem', marginLeft: 'auto', marginRight: 'auto', "backgroundColor": "#CE7762", color: '#000000', borderRadius: '10%'}}>
            <h4 className="py-3">Suas Profissões Cadastradas</h4>
        
                    {lista_profissoes}
            <div className='ml-3'>
                <ProfissaoModal botao={btn_add} profissoes="" cargo="" salario="" acao='cadastrar' id_egresso={id_egresso} />
            </div>
           
            </Row>
        </section>

        </React.Fragment>
    )
}
export default ProfissaoUsuario;