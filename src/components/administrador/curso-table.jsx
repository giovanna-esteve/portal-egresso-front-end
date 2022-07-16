import React, { useState } from 'react';
import { Container, Button, Row, Col, Form, Table, Card} from "react-bootstrap";
import { confirm } from "react-confirm-box";
import Header from "../header";
import Footer from "../footer";
import { Modal } from "react-bootstrap";
import CursoModal from "./curso-modal";
import CursoService from '../../CursoService';

function CursoTable(props){

    const service = new CursoService()

    function cadastrarCurso(id, nome, nivel)  {
      service.cadastrar(nome, nivel)
        .then( response => {
            window.location.reload();
        }).catch (erro => {
            console.log(erro.response)
        })
    }
    function editarCurso(id, nome, nivel)  {
      service.editar(id, nome, nivel)
        .then( response => {
            window.location.reload();
        }).catch (erro => {
          console.log(erro.response)
          alert(erro.response.data)
        })
      
    }
    function removerCurso(id)  {
      service.remover(id)
        .then( response => {
            window.location.reload();
        }).catch (erro => {
            console.log(erro.response)
            alert(erro.response.data)
        })
      
    }

  const [btn_add, setBtnAdd] = useState({classe:"btn btn-primary mt-3",texto:"Cadastrar"})
  const [btn_edit, setBtnEdit] = useState({classe:"btn btn-warning",texto:"Editar"})

  const row = props.cursos.map(
    curso => {
        return(
        <tr key={curso.id}>
          <td>{curso.id}</td>
          <td>{curso.nome}</td>  
          <td>{curso.nivel}</td>                  
          <td>
              <div className="btn-group mx-3">
                  <CursoModal botao={btn_edit} curso={curso} funcao_salvar={editarCurso}/>
              </div>          
              <div className="btn-group ">
                  <button onClick={() =>{ removerCurso(curso.id)}} type="button" className="btn btn-danger">Remover</button>
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
              <CursoModal botao={btn_add} curso="" funcao_salvar={cadastrarCurso}/>
          </tfoot>
      </table>
      
      </div>
    )
}
export default CursoTable;