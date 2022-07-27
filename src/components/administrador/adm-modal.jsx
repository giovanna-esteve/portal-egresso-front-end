import React, { useState } from 'react';
import { Container, Button, Row, Col, Form, Table, Card} from "react-bootstrap";
import Header from "../header";
import Footer from "../footer";
import { Modal } from "react-bootstrap";

import {salvar_administrador} from '../../js/page_administrador/adm';


function AdmModal(props){
    const [acao] = useState(props.botao.texto)

    function MyVerticallyCenteredModal(props) {
        const [nome, setNome] = useState()
        const [email, setEmail] = useState()
        const [senha, setSenha] = useState()
        
        function salvar(){
          salvar_administrador(nome, email, senha);
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
                          <Form.Label>Nome</Form.Label>
                          <Form.Control type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
                          </Form.Group>
                      </Col>
                  </Row>  
                  <Row className="mb-3">
                      <Col xs={12} >
                          <Form.Group as={Col} controlId="">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                          </Form.Group>
                      </Col>
                  </Row> 
                  <Row className="mb-3">
                      <Col xs={12} >
                          <Form.Group as={Col} controlId="">
                          <Form.Label>Senha</Form.Label>
                          <Form.Control type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
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
    />
    </div>
  )
}
export default AdmModal;