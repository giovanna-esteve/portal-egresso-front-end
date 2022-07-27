import React, { useState } from 'react';
import { Container, Button, Row, Col, Form, Table, Card} from "react-bootstrap";
import Swal from "sweetalert2"; 
import { confirm } from "react-confirm-box";
import Header from "../header";
import Footer from "../footer";
import { Modal } from "react-bootstrap";
import CursoModal from "./curso-modal";
import CursoService from '../../CursoService';

import { btn_add, btn_edit, confirmar_remover } from '../../js/page_administrador/curso';

function CursoTable(props){

  const row = props.cursos.map(
    curso => {
        return(
        <tr key={curso.id}>
          <td>{curso.id}</td>
          <td>{curso.nome}</td>  
          <td>{curso.nivel}</td>                  
          <td>
              <div className="btn-group mx-3">
                  <CursoModal botao={btn_edit} curso={curso}/>
              </div>          
              <div className="btn-group ">
                  <button onClick={() =>{ confirmar_remover(curso.id)}} type="button" className="btn btn-danger">Remover</button>
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
            <th>Nível</th>
            <th>Opções</th>
          </tr>
        </thead>
          <tbody>
            {row}
          </tbody>
          <tfoot>
              <CursoModal botao={btn_add} curso="" />
          </tfoot>
      </table>
      
      </div>
    )
}
export default CursoTable;