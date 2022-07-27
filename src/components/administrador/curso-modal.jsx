import React, { useState } from 'react';
import { Container, Button, Row, Col, Form, Table, Card} from "react-bootstrap";
import Header from "../header";
import Footer from "../footer";
import { Modal } from "react-bootstrap";

import { salvar_curso } from '../../js/page_administrador/curso';

function CursoModal(props){
    const [acao] = useState(props.botao.texto)
    const [id_curso] = useState(props.curso.id)

    function MyVerticallyCenteredModal(props) {
        const [nome, setNome] = useState(props.curso.nome)
        const [nivel, setNivel] = useState(props.curso.nivel)
        
        function salvar(){
          salvar_curso(acao, id_curso, nome, nivel);
          setModalShow(false)
        }
        return (
          <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {acao} curso
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                  <Row className="mb-3">
                      <Col xs={12} >
                          <Form.Group as={Col} controlId="">
                          <Form.Label>Nome</Form.Label>
                          <Form.Control type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
                          </Form.Group>
                      </Col>
                  </Row>
                  <Row className="mb-3">
                      <Col xs={12} >
                          <Form.Group as={Col} controlId="">
                          <Form.Label>Nível</Form.Label>
                          <Form.Control type="text" value={nivel} onChange={(e) => setNivel(e.target.value)} />
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
        <button type="submit" onClick={() => setModalShow(true)} className={props.botao.classe}>{props.botao.texto}</button>
      </a>
      <MyVerticallyCenteredModal
      show={modalShow}
      onHide={() => setModalShow(false)}
      curso={props.curso}
    />
    </div>
  )
}
export default CursoModal;