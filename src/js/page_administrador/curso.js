import CursoService from '../../CursoService';
import Swal from "sweetalert2"; 

const service = new CursoService()

export const btn_add = ({classe:"btn btn-primary mt-3",texto:"Cadastrar"})
export const btn_edit = ({classe:"btn btn-warning",texto:"Editar"})

export const salvar_curso = (acao, id_curso, nome, nivel) => {
  if(acao === "Cadastrar") cadastrar_curso(nome, nivel);
  if(acao === "Editar") editar_curso(id_curso, nome, nivel);
}

  

  const cadastrar_curso = (nome, nivel) => {
    if(!nome) nome = ''
    if(!nivel) nivel = ''
    service.cadastrar(nome, nivel)
        .then( response => {
          Swal.fire('Curso cadastrado com sucesso!', '', 'success').then((result) => {
            window.location.reload();
          });
        }).catch (erro => {
            console.log(erro.response)
            alert(erro.response.data)
        })
}

const editar_curso = (id_curso, nome, nivel) => {
  if(!nome) nome = ''
  if(!nivel) nivel = ''
  service.editar(id_curso, nome, nivel)
        .then( response => {
          Swal.fire('Curso editado com sucesso!', '', 'success').then((result) => {
            window.location.reload();
          });
        }).catch (erro => {
          console.log(erro.response)
          alert(erro.response.data)
        })
}

export const confirmar_remover = (id_curso) => {
    Swal.fire({  
      title: 'Removar Faixa de Salario do banco?',  
      type: 'warning',  
      showCancelButton: true,  
      confirmButtonColor: '#3085d6',  
      cancelButtonColor: '#d33',  
      confirmButtonText: 'Yes!'  
    }).then((result) => {  
      if (result.isConfirmed){
        remover_curso(id_curso)
      }
    });
  }

const remover_curso = (id_curso) => {
    service.remover(id_curso)
      .then( response => {
        Swal.fire('aixa de Salario removido com sucesso.', '', 'success').then((result) => {
          window.location.reload();
        });
      }).catch (erro => {
          console.log(erro.response)
          alert(erro.response.data)
      })
  }






