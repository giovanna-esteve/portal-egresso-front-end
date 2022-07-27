import CargoService from '../../CargoService';
import Swal from "sweetalert2"; 

const service = new CargoService()


export const btn_add = ({classe:"btn btn-primary mt-3",texto:"Cadastrar"})
export const btn_edit = ({classe:"btn btn-warning",texto:"Editar"})

export const salvar_cargo = (acao, id_cargo, nome, descricao) => {
  if(acao === "Cadastrar") cadastrar_cargo(nome, descricao);
  if(acao === "Editar") editar_cargo(id_cargo, nome, descricao);
}

  

  const cadastrar_cargo = (nome, descricao) => {
    if(!descricao) descricao = ''
    service.cadastrar(nome, descricao)
        .then( response => {
          Swal.fire('Cargo cadastrado com sucesso!', '', 'success').then((result) => {
            window.location.reload();
          });
        }).catch (erro => {
            console.log(erro.response)
            alert(erro.response.data)
        })
}

const editar_cargo = (id_cargo, nome, descricao) => {
  if(!descricao) descricao = ''
  service.editar(id_cargo, nome, descricao)
        .then( response => {
          Swal.fire('Cargo editado com sucesso!', '', 'success').then((result) => {
            window.location.reload();
          });
        }).catch (erro => {
            console.log(erro.response)
            alert(erro.response.data)
        })
}

export const confirmar_remover = (id_cargo) => {
    Swal.fire({  
      title: 'Removar cargo?',  
      type: 'warning',  
      showCancelButton: true,  
      confirmButtonColor: '#3085d6',  
      cancelButtonColor: '#d33',  
      confirmButtonText: 'Yes!'  
    }).then((result) => {  
      if (result.isConfirmed){
        remover_cargo(id_cargo)
      }
    });
  }

const remover_cargo = (id_cargo) => {
    service.remover(id_cargo)
      .then( response => {
        Swal.fire('Cargo removido com sucesso.', '', 'success').then((result) => {
          window.location.reload();
        });
      }).catch (erro => {
          console.log(erro.response)
          alert(erro.response.data)
      })
  }






