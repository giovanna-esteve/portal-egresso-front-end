import React, { useState } from 'react';
import { Container, Button, Row, Col, Form, Table, Card} from "react-bootstrap";
import Header from "../header";
import Footer from "../footer";
import { Modal } from "react-bootstrap";

function CargoModal(props){

    function MyVerticallyCenteredModal(props) {
        const [nome, setNome] = useState(props.cargo.nome)
        const [descricao, setDescricao] = useState(props.cargo.descricao)
        
        function salvar_cargo(){
          props.funcao_salvar(id, nome, descricao);
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
                {props.acao} cargo
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
              <Button onClick={() => salvar_cargo()}>Salvar</Button>
            </Modal.Footer>
          </Modal>
        );
    }

  const [modalShow, setModalShow] = React.useState(false);
  const [id, setId] = useState(props.cargo.id)
  return(
    <div>
      <a>
        <button type="submit" onClick={() => setModalShow(true)} className={props.botao.classe}>{props.botao.texto}</button>
      </a>
      <MyVerticallyCenteredModal
      show={modalShow}
      onHide={() => setModalShow(false)}
      cargo={props.cargo}
      funcao_salvar={props.funcao_salvar}
      acao={props.botao.texto}
    />
    </div>
  )
}
export default CargoModal;