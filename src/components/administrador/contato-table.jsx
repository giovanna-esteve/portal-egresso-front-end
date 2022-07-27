import React, { useState } from 'react';
import { Container, Button, Row, Col, Form, Table, Card} from "react-bootstrap";
import Swal from "sweetalert2"; 
import Header from "../header";
import Footer from "../footer";
import { Modal } from "react-bootstrap";
import ContatoModal from './contato-modal';
import ContatoService from '../../ContatoService';

import { btn_add, btn_edit, confirmar_remover } from '../../js/page_administrador/contato';


function ContatoTable(props){

  const row = props.contatos.map(
    contato => {
        return(
        <tr key={contato.id}>
          <td>{contato.id}</td>
          <td>{contato.nome}</td>  
          <td>{contato.url_logo}</td>                  
          <td>
              <div className="btn-group mx-3">
                  <ContatoModal botao={btn_edit} contato={contato}/>
              </div>          
              <div className="btn-group ">
                  <button onClick={() =>{ confirmar_remover(contato.id)}} type="button" className="btn btn-danger">Remover</button>
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
              <ContatoModal botao={btn_add} contato="" />
          </tfoot>
      </table>
      
      </div>
    )
}
export default ContatoTable;