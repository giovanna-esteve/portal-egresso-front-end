import React, { useState } from 'react';
import { Container, Button, Row, Col, Form, Table, Card} from "react-bootstrap";
import Header from "../header";
import Footer from "../footer";
import { Modal } from "react-bootstrap";

function AdmModal(props){

    function MyVerticallyCenteredModal(props) {
        const [nome, setNome] = useState(props.adm.nome)
        const [email, setEmail] = useState(props.adm.email)
        const [senha, setSenha] = useState()
        
        function salvar_administrador(){
          props.funcao_salvar(id, nome, email, senha);
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
                {props.acao} faixa salario
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
              <Button onClick={() => salvar_administrador()}>Salvar</Button>
            </Modal.Footer>
          </Modal>
        );
    }

  const [modalShow, setModalShow] = React.useState(false);
  const [id, setId] = useState(props.adm.id)
  return(
    <div>
      <a>
        <button type="submit" onClick={() => setModalShow(true)} className={props.botao.classe}>{props.botao.texto}</button>
      </a>
      <MyVerticallyCenteredModal
      show={modalShow}
      onHide={() => setModalShow(false)}
      adm={props.adm}
      funcao_salvar={props.funcao_salvar}
      acao={props.botao.texto}
    />
    </div>
  )
}
export default AdmModal;