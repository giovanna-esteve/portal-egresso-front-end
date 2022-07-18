import React, { useState } from 'react';
import { Container, Button, Row, Col, Form, Table, Card} from "react-bootstrap";
import Header from "../header";
import Footer from "../footer";
import { Modal } from "react-bootstrap";

function DepoimentoModal(props){

    function MyVerticallyCenteredModal(props) {
        const [texto, setTexto] = useState(props.depoimento.texto)
        const [id, setId] = useState(props.depoimento.id)
        
        function salvar_depoimento(){
          props.funcao_salvar(id, texto);
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
              <Button onClick={() => salvar_depoimento()}>Salvar</Button>
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
      funcao_salvar={props.funcao_salvar}
    />
    </div>
  )
}
export default DepoimentoModal;