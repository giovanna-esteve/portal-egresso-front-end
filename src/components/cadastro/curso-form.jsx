import React, { useState, useEffect  } from 'react';
import { Button,Col, Container, Row, Form,  Card } from "react-bootstrap";
import '../../css/cadastro.css'
import CursoService from '../../CursoService';

function CursoForm(props){
//-----------produz lista de cursos-------------------
    const [state, setState] = useState({cursos: []});
    const serviceCurso = new CursoService()
    useEffect(() => {
        serviceCurso.listar()
        .then( response => {
            console.log(response.data)
            setState({cursos: response.data})
        }).catch (erro => {
            console.log(erro.response)
        })
    }, []);
//----------- // produz lista de cursos-------------------

    function guardar_variaveis_inseridas(id_curso, data_inicio, data_conclusao){
        props.setCursoEgresso({id_curso: id_curso,
                                data_inicio: data_inicio,
                                data_conclusao: data_conclusao})
    }

    const select_curso = state.cursos.map(
        curso => {return(<option value={curso.id}>{curso.nome}-{curso.nivel}</option>)}
    )

    return(
        <React.Fragment>

<Container className="mb-5 px-5 ">
    <Card className="cards-cadastro">
    <Card.Header>Curso</Card.Header>
    <Card.Body>
    <Form>
        <Row className="mb-3">
            <Col xs={12} >
                <Form.Group as={Col} controlId="">
                <Form.Label>Selecione um curso <span className="black">*</span></Form.Label>
                <Form.Select value={props.cursoEgresso.id_curso} onChange={(e) => guardar_variaveis_inseridas(e.target.value, props.cursoEgresso.data_inicio, props.cursoEgresso.data_conclusao)}>
                    <option>Escolha uma opção...</option>
                    {select_curso}
                </Form.Select>
                </Form.Group>
            </Col>
        </Row>
        <Row className="mb-3">
            <Col xs={6} >
                <Form.Group as={Col} controlId="">
                <Form.Label>Data inicio <span className="black">*</span></Form.Label>
                <Form.Control type="date" value={props.cursoEgresso.data_inicio} onChange={(e) => guardar_variaveis_inseridas(props.cursoEgresso.id_curso, e.target.value, props.cursoEgresso.data_conclusao)}/>
                </Form.Group>
            </Col>
            <Col xs={6} >
                <Form.Group as={Col} controlId="">
                <Form.Label>Data conclusão <span className="black">*</span></Form.Label>
                <Form.Control type="date"  value={props.cursoEgresso.data_conclusao} onChange={(e) => guardar_variaveis_inseridas(props.cursoEgresso.id_curso, props.cursoEgresso.data_inicio, e.target.value)}/>
                </Form.Group>
            </Col>
        </Row>
    </Form>
    </Card.Body>
    </Card>
</Container>

        </React.Fragment>
    )
}

export default CursoForm;