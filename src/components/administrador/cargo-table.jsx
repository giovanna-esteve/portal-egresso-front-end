import React, { useState } from 'react';
import { Container, Button, Row, Col, Form, Table, Card} from "react-bootstrap";
import Swal from "sweetalert2"; 
import Header from "../header";
import Footer from "../footer";
import { Modal } from "react-bootstrap";
import CargoModal from './cargo-model';
import CargoService from '../../CargoService';

function CargoTable(props){

    const service = new CargoService()

    function cadastrarCargo(id, nome, descricao)  {
      service.cadastrar(nome, descricao)
        .then( response => {
          Swal.fire('Cargo cadastrado com sucesso!', '', 'success').then((result) => {
            window.location.reload();
          });
        }).catch (erro => {
            console.log(erro.response)
        })
    }

    function confirmarRemover(id)  {
      Swal.fire({  
        title: 'Removar cargo?',  
        type: 'warning',  
        showCancelButton: true,  
        confirmButtonColor: '#3085d6',  
        cancelButtonColor: '#d33',  
        confirmButtonText: 'Yes!'  
      }).then((result) => {  
        if (result.isConfirmed){
          removerCargo(id)
        }
      });
    }
    function removerCargo(id)  {
      service.remover(id)
        .then( response => {
          Swal.fire('Cargo removido com sucesso.', '', 'success').then((result) => {
            window.location.reload();
          });
        }).catch (erro => {
            console.log(erro.response)
        })
    }
    function editarCargo(id, nome, descricao)  {
      service.editar(id, nome, descricao)
        .then( response => {
          Swal.fire('Cargo editado com sucesso!', '', 'success').then((result) => {
            window.location.reload();
          });
        }).catch (erro => {
            console.log(erro.response)
        })
    }

  const [btn_add, setBtnAdd] = useState({classe:"btn btn-primary mt-3",texto:"Cadastrar"})
  const [btn_edit, setBtnEdit] = useState({classe:"btn btn-warning",texto:"Editar"})

  const row = props.cargos.map(
    cargo => {
        return(
        <tr key={cargo.id}>
          <td>{cargo.id}</td>
          <td>{cargo.nome}</td>  
          <td>{cargo.descricao}</td>                  
          <td>
              <div className="btn-group mx-3">
                  <CargoModal botao={btn_edit} cargo={cargo} funcao_salvar={editarCargo}/>
              </div>          
              <div className="btn-group ">
                  <button onClick={() =>{confirmarRemover(cargo.id)}} type="button" className="btn btn-danger">Remover</button>
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
            <CargoModal botao={btn_add} cargo="" funcao_salvar={cadastrarCargo}/>
        </tfoot>
    </table>
    
    </div>
  )
}
export default CargoTable;