import React, { useState } from 'react';
import { Container, Button, Row, Col, Form, Table, Card} from "react-bootstrap";
import Header from "../header";
import Footer from "../footer";
import { Modal } from "react-bootstrap";

import {salvar_contato} from '../../js/page_usuario/contato'

function ContatoModal(props){

    function MyVerticallyCenteredModal(props) {
        const [contatoEgressoList, setContatoEgressoList] = useState();
       
        function salvar(){
          salvar_contato(contatoEgressoList)
          setModalShow(false)
        }

        function guardar(valor,contato_id){
          var aux = []
          props.lista_contato_egresso.map(
              (item, index)=>{
                if(item.contato.id == contato_id){
                    item.descricao = valor
                }
                aux.push(item)
              }
          )  
          setContatoEgressoList(aux)     
        }
        const listar_contato = props.lista_contato_egresso.map(
            item => { return(<div>
                <div class="form-group row">
                    <label  class="col-sm-3 col-form-label text-center">{item.contato.nome}</label>
                    <div class="col-sm-9">
                        <Form.Control value={item.descricao}  onChange={(e) => guardar(e.target.value, item.contato.id)}/>
                    </div>
                </div><br/>
            </div>
        ) });

        return (
          <Modal
              {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
              <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    contatos
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                    <Form>
                        {listar_contato}
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
      lista_contato_egresso={props.lista_contato_egresso}
    />
    </div>
  )
}
export default ContatoModal;


