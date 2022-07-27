import React, { useState } from 'react';
import { Container, Button, Row, Col, Form, Table, Card} from "react-bootstrap";
import Header from "../header";
import Footer from "../footer";
import { Modal } from "react-bootstrap";

import { salvar_salario } from '../../js/page_administrador/salario';

function SalarioModal(props){
    const [acao] = useState(props.botao.texto)

    function MyVerticallyCenteredModal(props) {
        const [descricao, setDescricao] = useState(props.salario.descricao)
        
        function salvar(){
          salvar_salario(acao, id, descricao);
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
                {acao} faixa salario
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                  <Row className="mb-3">
                      <Col xs={12} >
                          <Form.Group as={Col} controlId="">
                          <Form.Label>Descrição</Form.Label>
                          <Form.Control type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)}/>
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
  const [id, setId] = useState(props.salario.id)
  return(
    <div>
      <a>
        <button type="submit" onClick={() => setModalShow(true)} className={props.botao.classe}>{props.botao.texto}</button>
      </a>
      <MyVerticallyCenteredModal
      show={modalShow}
      onHide={() => setModalShow(false)}
      salario={props.salario}
    />
    </div>
  )
}
export default SalarioModal;