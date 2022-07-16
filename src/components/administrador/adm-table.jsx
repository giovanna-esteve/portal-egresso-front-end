import React, { useState } from 'react';
import { Container, Button, Row, Col, Form, Table, Card} from "react-bootstrap";
import Header from "../header";
import Footer from "../footer";
import { Modal } from "react-bootstrap";
import AdmModal from './adm-modal';
import UsuarioService from '../../UsuarioService';


function AdmTable(props){

    const service = new UsuarioService()

    function cadastrarUsuarioAdm(id, nome, email, senha)  {
      service.cadastrarAdm(nome, email, senha)
        .then( response => {
            window.location.reload();
        }).catch (erro => {
            console.log(erro.response)
        })
    }
    function removerUsuarioAdm(id)  {
      service.remover(id)
        .then( response => {
            window.location.reload();
        }).catch (erro => {
            console.log(erro.response)
        })
    }
    // function editarUsuarioAdm(id, nome, email, senha)  {
    //   service.editar(id, nome, email, senha)
    //     .then( response => {
    //         window.location.reload();
    //     }).catch (erro => {
    //         console.log(erro.response)
    //     })
    // }

  const [btn_add, setBtnAdd] = useState({classe:"btn btn-primary mt-3",texto:"Cadastrar"})
  const [btn_edit, setBtnEdit] = useState({classe:"btn btn-warning",texto:"Editar"})

  const row = props.administradores.map(
    adm => {
        return(
        <tr key={adm.id}>
          <td>{adm.id}</td>
          <td>{adm.nome}</td>                  
          <td>{adm.email}</td>                                
          <td>
              {/* <div className="btn-group mx-3">
                <AdmModal botao={btn_edit} adm={adm} funcao_salvar={editarUsuarioAdm}/>
              </div>           */}
              <div className="btn-group ">
                  <button onClick={() => removerUsuarioAdm(adm.id)} type="button" className="btn btn-danger">Remover</button>
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
            <AdmModal botao={btn_add} adm="" funcao_salvar={cadastrarUsuarioAdm}/>
        </tfoot>
    </table>
    
    </div>
  )
}
export default AdmTable;