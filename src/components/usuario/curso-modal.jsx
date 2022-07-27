import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col, Form, Table, Card} from "react-bootstrap";
import { Modal } from "react-bootstrap";
import CursoService from '../../CursoService';

import {salvar_curso} from '../../js/page_usuario/curso'

function CursoModal(props){
      const [id_egresso] = useState(props.id_egresso);
      
      // listar cursos
      const [state, setState] = useState({cursos: []});
      const serviceCurso = new CursoService()
      useEffect(() => {
          serviceCurso.listar()
          .then( response => {
              setState({cursos: response.data})
          }).catch (erro => {
              console.log(erro.response)
          })
      }, []);


    function MyVerticallyCenteredModal(props) {   
        const [idCurso, setIdCurso] = useState(props.curso_egresso.id)
        const [dataInicio, setDataInicio] = useState(props.data_inicio)
        const [dataConclusao, setDataConclusao] = useState(props.data_conclusao)

        function salvar(){
          var curso_egresso = {id_egresso: id_egresso, id_curso:idCurso, data_inicio: dataInicio, data_conclusao: dataConclusao};
          salvar_curso(curso_egresso);
          setModalShow(false)
        }
        
        const select_curso = state.cursos.map(
          curso => {return(<option value={curso.id}>{curso.nome} - {curso.nivel}</option>)}
        )
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Depoimento
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
      <Form>
        <Row className="mb-3">
            <Col xs={12} >
                <Form.Group as={Col} controlId="">
                <Form.Label>Selecione um curso <span className="black">*</span></Form.Label>
                <Form.Select value={idCurso} onChange={(e) => setIdCurso(e.target.value)}>
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
                <Form.Control type="date" value={dataInicio}  onChange={(e) => setDataInicio(e.target.value)}/>
                </Form.Group>
            </Col>
            <Col xs={6} >
                <Form.Group as={Col} controlId="">
                <Form.Label>Data conclusão <span className="black">*</span></Form.Label>
                <Form.Control type="date" value={dataConclusao} onChange={(e) => setDataConclusao(e.target.value)}/>
                </Form.Group>
            </Col>
        </Row>
    </Form>  
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => salvar()}>Salvar</Button>
            </Modal.Footer>
          </Modal>
        );
    }

  const [modalShow, setModalShow] = React.useState(false);
  return(
    <div>
      <a>
        <Button variant={props.botao.variant} onClick={() => setModalShow(true)}  type="submit">{props.botao.texto}</Button>
      </a>
      <MyVerticallyCenteredModal
      show={modalShow}
      onHide={() => setModalShow(false)}
      curso_egresso={props.curso_egresso}
      data_inicio={props.data_inicio}
      data_conclusao={props.data_conclusao}
      id_egresso={props.id_egresso}
    />
    </div>
  )
}
export default CursoModal;