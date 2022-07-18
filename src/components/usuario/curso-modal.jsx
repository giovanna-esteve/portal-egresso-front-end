import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col, Form, Table, Card} from "react-bootstrap";
import Header from "../header";
import Footer from "../footer";
import { Modal } from "react-bootstrap";
import CursoService from '../../CursoService';

function CursoModal(props){
  //-----------produz lista de cursos-------------------
  const [state, setState] = useState({cursos: []});
  const serviceCurso = new CursoService()
  useEffect(() => {
      serviceCurso.listar()
      .then( response => {
          console.log("cursos")
          console.log(response.data)
          setState({cursos: response.data})
      }).catch (erro => {
          console.log(erro.response)
      })
  }, []);
//----------- // produz lista de cursos-------------------

    function MyVerticallyCenteredModal(props) {
        const [idCurso, setIdCurso] = useState()
        const [dataInicio, setDataInicio] = useState()
        const [dataConclusao, setDataConclusao] = useState()
        const [teste, setTeste] = useState(props.curso_egresso)
        
        
        function salvar(){
          props.funcao_salvar(idCurso, dataInicio,dataConclusao);
          setModalShow(false)
        }

        const select_curso = props.cursos.map(
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
                <Form.Select value={props.curso_egresso.id}  onChange={(e) => setIdCurso(e.target.value)}>
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
                <Form.Control type="date"  onChange={(e) => setDataInicio(e.target.value)}/>
                </Form.Group>
            </Col>
            <Col xs={6} >
                <Form.Group as={Col} controlId="">
                <Form.Label>Data conclusão <span className="black">*</span></Form.Label>
                <Form.Control type="date" onChange={(e) => setDataConclusao(e.target.value)}/>
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
      cursos={state.cursos}
      curso_egresso={props.curso_egresso}
      funcao_salvar={props.funcao_salvar}
    />
    </div>
  )
}
export default CursoModal;