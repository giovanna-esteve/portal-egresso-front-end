import React, { useState } from 'react';
import { Container, Button, Row, Col, Form, Table, Card} from "react-bootstrap";
import { Modal } from "react-bootstrap";

import {salvar_depoimento} from '../../js/page_usuario/depoimento'

function DepoimentoModal(props){
    const [id_egresso] = React.useState(props.id_egresso);
    const [acao] = React.useState(props.acao);

    function MyVerticallyCenteredModal(props) {
        const [texto, setTexto] = useState(props.depoimento.texto)
        const [id_depoimento, setId] = useState(props.depoimento.id)

        function salvar(){
          salvar_depoimento(acao, id_depoimento,  texto, id_egresso)
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
                Depoimento
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Escreva seu depoimento abaixo</Form.Label>
                    <Form.Control as="textarea" rows={5} value={texto} onChange={(e) => setTexto(e.target.value)} />
                </Form.Group>
              </Form>      
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => {salvar() }}>Salvar</Button>
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
      depoimento={props.depoimento}
    />
    </div>
  )
}
export default DepoimentoModal;