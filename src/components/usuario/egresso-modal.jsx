import React, { useState } from 'react';
import { Container, Button, Row, Col, Form, Table, Card} from "react-bootstrap";
import Header from "../header";
import Footer from "../footer";
import { Modal } from "react-bootstrap";

import {salvar_dados_egresso } from '../../js/page_usuario/usuario'

function EgressoModal(props){

    function MyVerticallyCenteredModal(props) {
        const [nome, setNome] = useState(props.egresso.nome)
        const [email, setEmail] = useState(props.egresso.email)
        const [cpf, setCpf] = useState(props.egresso.cpf)
        const [resumo, setResumo] = useState(props.egresso.resumo)
        const [id, setId] = useState(props.egresso.id)
        
        function salvar(){
          salvar_dados_egresso(id, nome, email, cpf, resumo);
          setModalShow(false)
        }
        
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                egresso
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
            <Col>
                <Form.Group controlId="formGridAddress1" className="mb-3">
                    <Form.Label>Nome Completo <span className="black">*</span></Form.Label>
                    <Form.Control type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
                    <Form.Label>Email <span className="black">*</span></Form.Label>
                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword" className="mb-3">
                    <Form.Label>CPF <span className="black">*</span></Form.Label>
                    <Form.Control disabled value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Resumo</Form.Label>
                    <Form.Control as="textarea" rows={3} value={resumo} onChange={(e) => setResumo(e.target.value)}/>
                </Form.Group>
            </Col>
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
      egresso={props.dados_egresso}
    />
    </div>
  )
}
export default EgressoModal;