import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col, Form, Table, Card} from "react-bootstrap";
import Header from "../header";
import Footer from "../footer";
import { Modal } from "react-bootstrap";
import CargoService from '../../CargoService';
import FaixaSalarioService from '../../FaixaSalarioService';

import {salvar_profissao} from '../../js/page_usuario/profissao'


function ProfissaoModal(props){
    const [acao] = useState(props.acao);
    const [id_egresso] = useState(props.id_egresso);

    // lista todos os cargos
    const [cargos, setCargos] = useState({lista: []});
    const serviceCargo = new CargoService()
    useEffect(() => {
      serviceCargo.listar()
        .then( response => {
          setCargos({lista: response.data})
        }).catch (erro => {
            console.log(erro.response)
        })
    }, []);
    // lista todas as faixas salariais
    const [salarios, setSalarios] = useState({lista: []});
    const serviceFaixaSalario = new FaixaSalarioService()
    useEffect(() => {
      serviceFaixaSalario.listar()
        .then( response => {
          setSalarios({lista: response.data})
        }).catch (erro => {
            console.log(erro.response)
        })
    }, []);


    function MyVerticallyCenteredModal(props) {
        const [id_profissao, setId] = useState(props.profissoes.id);
        const [empresa, setEmpresa] = useState(props.profissoes.empresa);
        const [descricao, setDescricao] = useState(props.profissoes.descricao);
        const [cargoId, setCargoId] = useState(props.cargo.id);
        const [salarioId, setSalarioId] = useState(props.salario.id);
       
        function salvar(){
          salvar_profissao(acao, id_profissao, id_egresso, empresa, descricao, cargoId, salarioId);
          setModalShow(false)
        }

        const select_cargo = cargos.lista.map(
          cargo => { return(<option value={cargo.id}>{cargo.nome}</option>)}
      );
      const select_salario = salarios.lista.map(
          salario => { return(<option value={salario.id}>{salario.descricao}</option>)}
      );

        return (
          <Modal
              {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
              <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    profissões
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form>
                  <Row className="mb-3">
                      <Col xs={12} >
                          <Form.Group as={Col} controlId="">
                          <Form.Label>Empresa <span className="black">*</span></Form.Label>
                          <Form.Control value={empresa} onChange={(e) => setEmpresa(e.target.value)}/>
                          </Form.Group>
                      </Col>
                  </Row>
                  <Row className="mb-3">
                      <Form.Group as={Col} controlId="">
                      <Form.Label>Descrição</Form.Label>
                      <Form.Control value={descricao} onChange={(e) => setDescricao(e.target.value)}/>
                      </Form.Group>
                  </Row>
                  <Row className="mb-3">
                      <Form.Group as={Col} controlId="">
                      <Form.Label>Cargo <span className="black">*</span></Form.Label>
                      <Form.Select value={cargoId} onChange={(e) => setCargoId(e.target.value)}>
                          <option>Escolha uma opção...</option>
                          {select_cargo}
                      </Form.Select>
                      </Form.Group>
                      <Form.Group as={Col} controlId="">
                          <Form.Label>Faixa Salarial <span className="black">*</span></Form.Label>
                          <Form.Select value={salarioId} onChange={(e) => setSalarioId(e.target.value)}>
                              <option>Escolha uma opção...</option>
                              {select_salario}
                          </Form.Select>
                      </Form.Group>
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
      <a >
        <Button variant={props.botao.variant} onClick={() => setModalShow(true)}  type="submit">{props.botao.texto}</Button>
      </a>
      <MyVerticallyCenteredModal
      show={modalShow}
      onHide={() => setModalShow(false)}
      profissoes={props.profissoes}
      cargo={props.cargo}
      salario={props.salario}
    />
    </div>
  )
}
export default ProfissaoModal;