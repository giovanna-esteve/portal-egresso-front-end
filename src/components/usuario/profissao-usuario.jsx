import { formControlLabelClasses } from '@mui/material';
import React, { useState, useEffect  } from 'react';
import Swal from "sweetalert2"; 
import { Button,Col, Container, Row, Form,  Card, Table} from "react-bootstrap";
import ProfEgressoService from '../../ProfEgressoService';
import ProfissaoModal from './profissao-modal';


function ProfissaoUsuario(props){
//----------------------------------------------------------------------
    const [state, setState] = useState({profissoes: []});
    const service = new ProfEgressoService()

    useEffect(() => {
      service.listar(props.id_egresso)
        .then( response => {
            setState({profissoes: response.data})
        }).catch (erro => {
            console.log(erro.response)
        })
    }, []);
//----------------------------------------------------------------------


    function salvarProfEgresso(empresa, descricao, cargoId, salarioId)  {
        console.log(empresa, descricao, cargoId, salarioId)
        service.cadastrar(props.id_egresso, empresa, descricao, cargoId, salarioId)
            .then( response => {
                Swal.fire('Profissão salvo com sucesso!', '', 'success').then((result) => {
                    window.location.reload();
                });
            }).catch (erro => {
                console.log(erro.response)
                alert(erro.response.data)
            })
    }

    const [btn_add, setBtnAdd] = useState({acao:"cadastrar", variant:"secondary",texto:"+ novo"})

    const lista_profissoes = state.profissoes.map(
        (item) => {
            return(
                <div>
                   
                <Container>
                <div className='row'>
                    <div className='col-2' style={{border:'1px solid red' }}>
                        <p>Empresa</p>
                    </div>
                    <div className='col-10' style={{border:'1px solid red' }}>
                        <p>{item.empresa}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2' style={{border:'1px solid red' }}>
                        <p>Descrição</p>
                    </div>
                    <div className='col-10' style={{border:'1px solid red' }}>
                        <p>{item.descricao}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-1' style={{border:'1px solid red' }}>
                        <p>Cargo</p>
                    </div>
                    <div className='col-5' style={{border:'1px solid red' }}>
                        <p>{item.cargo.nome}</p>
                    </div>
                    <div className='col-2' style={{border:'1px solid red' }}>
                        <p>Faixa Salario</p>
                    </div>
                    <div className='col-4' style={{border:'1px solid red' }}>
                        <p>{item.faixaSalario.descricao}</p>
                    </div>
                </div>
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
                <ProfissaoModal botao={btn_add} profissoes="" cargo="" salario="" funcao_salvar={salvarProfEgresso} />
            </div>
           
            </Row>
        </section>

        </React.Fragment>
    )
}
export default ProfissaoUsuario;