import React, { useState } from 'react';
import { Container, Button, Row, Col, Form, Table, Card} from "react-bootstrap";
import Header from "../header";
import Footer from "../footer";
import { Modal } from "react-bootstrap";

import { salvar_cargo } from '../../js/page_administrador/cargo';

function CargoModal(props){
    const [acao, setNome] = useState(props.botao.texto)
    const [id_cargo, setId] = useState(props.cargo.id)

    function MyVerticallyCenteredModal(props) {
        const [nome, setNome] = useState(props.cargo.nome)
        const [descricao, setDescricao] = useState(props.cargo.descricao)
        
        function salvar(){
          salvar_cargo(acao, id_cargo, nome, descricao);
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
                {acao} cargo
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
                          <Form.Label>Descrição</Form.Label>
                          <Form.Control type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
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
      cargo={props.cargo}
    />
    </div>
  )
}
export default CargoModal;