import React, { useState, useEffect  } from 'react';
import { Button,Col, Container, Row, Form,  Card } from "react-bootstrap";
import '../../css/cadastro.css'
import CargoService from '../../CargoService';
import FaixaSalarioService from '../../FaixaSalarioService';

function ProfissaoForm(props){
//----------- produz lista de cargos e faixa salarial-------------------
    const [state, setState] = useState({cargos: []});
    const serviceCargo = new CargoService()
    useEffect(() => {
        serviceCargo.listar()
        .then( response => {
            setState({cargos: response.data})
        }).catch (erro => {
            console.log(erro.response)
        })
    }, []);
    const [faixaSalario, setFaixaSalario] = useState({salarios: []});
    const serviceSalario = new FaixaSalarioService()
    useEffect(() => {
        serviceSalario.listar()
        .then( response => {
            setFaixaSalario({salarios: response.data})
        }).catch (erro => {
            console.log(erro.response)
        })
    }, []);
//----------- // produz lista de cargos e faixa salarial-------------------


    function guardar_variaveis_inseridas(empresa, descricao, id_cargo, id_faixa_salario){
        props.setProfissao({empresa: empresa,
            descricao: descricao,
            id_cargo: id_cargo,
            id_faixa_salario: id_faixa_salario})
    }

    const select_cargo = state.cargos.map(
        cargo => { return(<option value={cargo.id}>{cargo.nome}</option>)}
    );
    const select_salario = faixaSalario.salarios.map(
        salario => { return(<option value={salario.id}>{salario.descricao}</option>)}
    );
    return(
        <React.Fragment>

<Container className="mb-5 px-5 ">
    <Card className="cards-cadastro">
        <Card.Header>Profissão atual (opcional)</Card.Header>
        <Card.Body>
        <Form>
            <Row className="mb-3">
                <Col xs={12} >
                    <Form.Group as={Col} controlId="">
                    <Form.Label>Empresa</Form.Label>
                    <Form.Control value={props.profissao.empresa} onChange={(e) => guardar_variaveis_inseridas(e.target.value, props.profissao.descricao, props.profissao.id_cargo, props.profissao.id_faixa_salario)} />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="">
                <Form.Label>Descrição</Form.Label>
                <Form.Control value={props.profissao.descricao} onChange={(e) => guardar_variaveis_inseridas(props.profissao.empresa, e.target.value, props.profissao.id_cargo, props.profissao.id_faixa_salario)} />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="">
                <Form.Label>Cargo</Form.Label>
                <Form.Select value={props.profissao.id_cargo} onChange={(e) => guardar_variaveis_inseridas(props.profissao.empresa, props.profissao.descricao, e.target.value, props.profissao.id_faixa_salario)}>
                    <option>Escolha uma opção...</option>
                    {select_cargo}
                </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="">
                    <Form.Label>Faixa Salarial</Form.Label>
                    <Form.Select value={props.profissao.id_faixa_salario} onChange={(e) => guardar_variaveis_inseridas(props.profissao.empresa, props.profissao.descricao, props.profissao.id_cargo, e.target.value)}>
                        <option>Escolha uma opção...</option>
                        {select_salario}
                    </Form.Select>
                </Form.Group>
            </Row>
        </Form>
        </Card.Body>
    </Card>
</Container>



        
        </React.Fragment>
    )
}

export default ProfissaoForm;