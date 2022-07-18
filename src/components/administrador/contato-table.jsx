import React, { useState } from 'react';
import { Container, Button, Row, Col, Form, Table, Card} from "react-bootstrap";
import Swal from "sweetalert2"; 
import Header from "../header";
import Footer from "../footer";
import { Modal } from "react-bootstrap";
import ContatoModal from './contato-modal';
import ContatoService from '../../ContatoService';


function ContatoTable(props){
  const service = new ContatoService()

  function cadastrarContato(nid, nome, url_logo)  {
    service.cadastrar(nome, url_logo)
      .then( response => {
        Swal.fire('Contato cadastrado com sucesso!', '', 'success').then((result) => {
          window.location.reload();
        }); 
      }).catch (erro => {
          console.log(erro.response)
      })
  }

  function confirmarRemover(id)  {
    Swal.fire({  
      title: 'Deletar contato?',  
      type: 'warning',  
      showCancelButton: true,  
      confirmButtonColor: '#3085d6',  
      cancelButtonColor: '#d33',  
      confirmButtonText: 'Yes!'  
    }).then((result) => {  
      if (result.isConfirmed){
        removerContato(id)
      }
    });
  }
  function removerContato(id)  {
    service.remover(id)
      .then( response => {
        Swal.fire('Contato removido.', '', 'success').then((result) => {
          window.location.reload();
        }); 
      }).catch (erro => {
          console.log(erro.response)
      })
  }

  function editarContato(id, nome, url_logo)  {
    service.editar(id, nome, url_logo)
      .then( response => {
        Swal.fire('Contato editado com sucesso!', '', 'success').then((result) => {
          window.location.reload();
        });
      }).catch (erro => {
          console.log(erro.response)
      })
  }

  const [btn_add, setBtnAdd] = useState({classe:"btn btn-primary mt-3",texto:"Cadastrar"})
  const [btn_edit, setBtnEdit] = useState({classe:"btn btn-warning",texto:"Editar"})

  const row = props.contatos.map(
    contato => {
        return(
        <tr key={contato.id}>
          <td>{contato.id}</td>
          <td>{contato.nome}</td>  
          <td>{contato.url_logo}</td>                  
          <td>
              <div className="btn-group mx-3">
                  <ContatoModal botao={btn_edit} contato={contato} funcao_salvar={editarContato}/>
              </div>          
              <div className="btn-group ">
                  <button onClick={() =>{ confirmarRemover(contato.id)}} type="button" className="btn btn-danger">Remover</button>
              </div>                   
          </td>
        </tr>
        )
    }
  )

    return(
      <div>
      <table id="example1" className="table table-bordered table-hover">
        <thead>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Url da Logo</th>
            <th>Opções</th>
          </tr>
        </thead>
          <tbody>
            {row}
          </tbody>
          <tfoot>
              <ContatoModal botao={btn_add} contato="" funcao_salvar={cadastrarContato}/>
          </tfoot>
      </table>
      
      </div>
    )
}
export default ContatoTable;