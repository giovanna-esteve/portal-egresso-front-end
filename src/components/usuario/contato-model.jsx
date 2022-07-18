import React, { useState } from 'react';
import { Container, Button, Row, Col, Form, Table, Card} from "react-bootstrap";
import Header from "../header";
import Footer from "../footer";
import { Modal } from "react-bootstrap";

function ContatoModal(props){



    function MyVerticallyCenteredModal(props) {
        //const [descricao, setDescricao] = useState(props.contatoEgresso.descricao)
        //const [id, setId] = useState(props.contato.id)
        
        function salvar_contato(){

          //props.funcao_salvar();
          //setModalShow(false)
        }

        function guardar_variaveis_inseridas(valor,contato_id){
          var aux = []
          props.contatos.map(
              (item,index)=>{
                  var descricao = props.contatoEgresso[index].descricao;
                  var egresso_id = props.contatoEgresso[index].egresso_id;
                  if(contato_id === item.contato.id) descricao = valor;
                  aux.push({egresso_id:egresso_id,  contato_id:item.contato.id, descricao:descricao})
              }
          )  
          
          props.setContatoEgresso({lista: aux})     
      }
      const listar_contato = props.contatos.map(
          item => { return(<div>
              <div class="form-group row">
                  <label  class="col-sm-3 col-form-label text-center">{item.contato.nome}</label>
                  <div class="col-sm-9">
                      <Form.Control  onChange={(e) => guardar_variaveis_inseridas(e.target.value, item.contato.id)}/>
                  </div>
              </div>
              <br/>
      </div>)});
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
              <Button onClick={() => salvar_contato()}>Salvar</Button>
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
      contatoEgresso={props.contatoEgresso}
      setContatoEgresso={props.setContatoEgresso}
      contatos={props.contatos}
      funcao_salvar={props.funcao_salvar}
    />
    </div>
  )
}
export default ContatoModal;