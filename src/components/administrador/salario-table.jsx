import React, { useState } from 'react';
import { Container, Button, Row, Col, Form, Table, Card} from "react-bootstrap";
import Swal from "sweetalert2"; 
import Header from "../header";
import Footer from "../footer";
import { Modal } from "react-bootstrap";
import SalarioModal from './salario-modal';
import FaixaSalarioService from '../../FaixaSalarioService';

import { btn_add, btn_edit, confirmar_remover } from '../../js/page_administrador/salario';


function SalarioTable(props){

    

  const row = props.salarios.map(
    salario => {
        return(
        <tr key={salario.id}>
          <td>{salario.id}</td>
          <td>{salario.descricao}</td>                  
          <td>
              <div className="btn-group mx-3">
                <SalarioModal botao={btn_edit} salario={salario}/>
              </div>          
              <div className="btn-group ">
                  <button onClick={() => confirmar_remover(salario.id)} type="button" className="btn btn-danger">Remover</button>
              </div>                   
          </td>
        </tr>
        )
    }
  )

  return(
    <div>
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th></th>
          <th>Descrição</th>
          <th>Opções</th>
        </tr>
      </thead>
        <tbody>
          {row}
        </tbody>
        <tfoot>
            <SalarioModal botao={btn_add} salario="" />
        </tfoot>
    </table>
    
    </div>
  )
}
export default SalarioTable;