import React, { useState } from 'react';
import { Container, Button, Row, Col, Form, Table, Card} from "react-bootstrap";
import Swal from "sweetalert2"; 
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
          Swal.fire('Faixa Salario cadastrado com sucesso!', '', 'success').then((result) => {
            window.location.reload();
          });
        }).catch (erro => {
            console.log(erro.response)
        })
    }

    function confirmarRemover(id)  {
      Swal.fire({  
        title: 'Removar Faixa Salario?',  
        type: 'warning',  
        showCancelButton: true,  
        confirmButtonColor: '#3085d6',  
        cancelButtonColor: '#d33',  
        confirmButtonText: 'Yes!'  
      }).then((result) => {  
        if (result.isConfirmed){
          removerSalario(id)
        }
      });
    }
    function removerSalario(id)  {
      service.remover(id)
        .then( response => {
          Swal.fire('Faixa Salario removido com sucesso.', '', 'success').then((result) => {
            window.location.reload();
          });
        }).catch (erro => {
            console.log(erro.response)
        })
    }
    function editarSalario(id, descricao)  {
      service.editar(id, descricao)
        .then( response => {
          Swal.fire('Faixa Salario editado com sucesso!', '', 'success').then((result) => {
            window.location.reload();
          });
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
                  <button onClick={() => confirmarRemover(salario.id)} type="button" className="btn btn-danger">Remover</button>
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