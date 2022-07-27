import React, { useState } from 'react';
import { Container, Button, Row, Col, Form, Table, Card} from "react-bootstrap";
import Header from "../header";
import Footer from "../footer";
import { Modal } from "react-bootstrap";

import { salvar_contato } from '../../js/page_administrador/contato';

function ContatoModal(props){
    const [id_contato] = useState(props.contato.id)
    const [acao] = useState(props.botao.texto)

    function MyVerticallyCenteredModal(props) {
        const [nome, setNome] = useState(props.contato.nome)
        const [url_logo, setUrl] = useState(props.contato.url_logo)
        
        function salvar(){
          salvar_contato(acao, id_contato, nome, url_logo);
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
                {acao} contato
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
                          <Form.Label>Url da Logo</Form.Label>
                          <Form.Control type="text" value={url_logo} onChange={(e) => setUrl(e.target.value)} />
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
      contato={props.contato}
    />
    </div>
  )
}
export default ContatoModal;