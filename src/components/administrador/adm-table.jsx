import React, { useState } from 'react';
import { Container, Button, Row, Col, Form, Table, Card} from "react-bootstrap";
import Swal from "sweetalert2"; 
import Header from "../header";
import Footer from "../footer";
import { Modal } from "react-bootstrap";
import AdmModal from './adm-modal';
import UsuarioService from '../../UsuarioService';

import { btn_add, confirmar_remover } from '../../js/page_administrador/adm';


function AdmTable(props){

      const row = props.administradores.map(
        adm => {
            return(
            <tr key={adm.id}>
              <td>{adm.id}</td>
              <td>{adm.nome}</td>                  
              <td>{adm.email}</td>                                
              <td>
                  <div className="btn-group ">
                      <button onClick={() => confirmar_remover(adm.id)} type="button" className="btn btn-danger">Remover</button>
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
              <th>Email</th>
              <th>Opções</th>
            </tr>
          </thead>
            <tbody>
              {row}
            </tbody>
            <tfoot>
                <AdmModal botao={btn_add}/>
            </tfoot>
        </table>
        
        </div>
      )
}
export default AdmTable;