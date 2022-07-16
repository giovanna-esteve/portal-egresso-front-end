import React, { useState } from 'react';
import { Container, Button, Row, Col, Form, Table, Card} from "react-bootstrap";
import Header from "../header";
import Footer from "../footer";
import { Modal } from "react-bootstrap";
import SalarioModal from './salario-modal';
import FaixaSalarioService from '../../FaixaSalarioService';


function SalarioTable(props){

    const service = new FaixaSalarioService()

    function cadastrarSalario(id, descricao)  {
      service.cadastrar(descricao)
        .then( response => {
            window.location.reload();
        }).catch (erro => {
            console.log(erro.response)
        })
    }
    function removerSalario(id)  {
      service.remover(id)
        .then( response => {
            window.location.reload();
        }).catch (erro => {
            console.log(erro.response)
        })
    }
    function editarSalario(id, descricao)  {
      service.editar(id, descricao)
        .then( response => {
            window.location.reload();
        }).catch (erro => {
            console.log(erro.response)
        })
    }

  const [btn_add, setBtnAdd] = useState({classe:"btn btn-primary mt-3",texto:"Cadastrar"})
  const [btn_edit, setBtnEdit] = useState({classe:"btn btn-warning",texto:"Editar"})

  const row = props.salarios.map(
    salario => {
        return(
        <tr key={salario.id}>
          <td>{salario.id}</td>
          <td>{salario.descricao}</td>                  
          <td>
              <div className="btn-group mx-3">
                <SalarioModal botao={btn_edit} salario={salario} funcao_salvar={editarSalario}/>
              </div>          
              <div className="btn-group ">
                  <button onClick={() => removerSalario(salario.id)} type="button" className="btn btn-danger">Remover</button>
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
            <SalarioModal botao={btn_add} salario="" funcao_salvar={cadastrarSalario}/>
        </tfoot>
    </table>
    
    </div>
  )
}
export default SalarioTable;