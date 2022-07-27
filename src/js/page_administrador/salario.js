import FaixaSalarioService from '../../FaixaSalarioService';
import Swal from "sweetalert2"; 

const service = new FaixaSalarioService()

export const btn_add = ({classe:"btn btn-primary mt-3",texto:"Cadastrar"})
export const btn_edit = ({classe:"btn btn-warning",texto:"Editar"})

export const salvar_salario = (acao, id, descricao) => {
  if(acao === "Cadastrar") cadastrar_salario(descricao);
  if(acao === "Editar") editar_salario(id, descricao);
}

  

  const cadastrar_salario = (descricao) => {
    if(!descricao) descricao = ''
    service.cadastrar(descricao)
        .then( response => {
          Swal.fire('Faixa Salario cadastrado com sucesso!', '', 'success').then((result) => {
            window.location.reload();
          });
        }).catch (erro => {
            console.log(erro.response)
            alert(erro.response.data)
        })
}

const editar_salario = (id, descricao) => {
  if(!descricao) descricao = ''
  service.editar(id, descricao)
        .then( response => {
          Swal.fire('Faixa Salario editado com sucesso!', '', 'success').then((result) => {
            window.location.reload();
          });
        }).catch (erro => {
            console.log(erro.response)
            alert(erro.response.data)
        })
}

export const confirmar_remover = (id_salario) => {
    Swal.fire({  
      title: 'Removar Faixa de Salario do banco?',  
      type: 'warning',  
      showCancelButton: true,  
      confirmButtonColor: '#3085d6',  
      cancelButtonColor: '#d33',  
      confirmButtonText: 'Yes!'  
    }).then((result) => {  
      if (result.isConfirmed){
        remover_salario(id_salario)
      }
    });
  }

const remover_salario = (id_salario) => {
    service.remover(id_salario)
      .then( response => {
        Swal.fire('aixa de Salario removido com sucesso.', '', 'success').then((result) => {
          window.location.reload();
        });
      }).catch (erro => {
          console.log(erro.response)
          alert(erro.response.data)
      })
  }






