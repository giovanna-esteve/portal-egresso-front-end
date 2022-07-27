import React, { useState } from 'react';
import { Container, Button, Row, Col, Form, Table, Card} from "react-bootstrap";
import Swal from "sweetalert2"; 
import Header from "../header";
import Footer from "../footer";
import { Modal } from "react-bootstrap";
import CargoModal from './cargo-model';
import CargoService from '../../CargoService';

import { btn_add, btn_edit, confirmar_remover } from '../../js/page_administrador/cargo';

function CargoTable(props){

    const service = new CargoService()

  const row = props.cargos.map(
    cargo => {
        return(
        <tr key={cargo.id}>
          <td>{cargo.id}</td>
          <td>{cargo.nome}</td>  
          <td>{cargo.descricao}</td>                  
          <td>
              <div className="btn-group mx-3">
                  <CargoModal botao={btn_edit} cargo={cargo} />
              </div>          
              <div className="btn-group ">
                  <button onClick={() =>{confirmar_remover(cargo.id)}} type="button" className="btn btn-danger">Remover</button>
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
          <th>Nome</th>
          <th>Descrição</th>
          <th>Opções</th>
        </tr>
      </thead>
        <tbody>
          {row}
        </tbody>
        <tfoot>
            <CargoModal botao={btn_add} cargo="" />
        </tfoot>
    </table>
    
    </div>
  )
}
export default CargoTable;