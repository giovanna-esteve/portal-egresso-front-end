import ContatoService from '../../ContatoService';
import Swal from "sweetalert2"; 

const service = new ContatoService()

export const btn_add = ({classe:"btn btn-primary mt-3",texto:"Cadastrar"})
export const btn_edit = ({classe:"btn btn-warning",texto:"Editar"})

export const salvar_contato = (acao, id_contato, nome, url_logo) => {
  if(acao === "Cadastrar") cadastrar_contato(nome, url_logo);
  if(acao === "Editar") editar_contato(id_contato, nome, url_logo);
}

  

  const cadastrar_contato = (nome, url_logo) => {
    if(!url_logo) url_logo =''
    service.cadastrar(nome, url_logo)
      .then( response => {
        Swal.fire('Contato cadastrado com sucesso!', '', 'success').then((result) => {
          window.location.reload();
        }); 
      }).catch (erro => {
          console.log(erro.response)
          alert(erro.response.data)
      })
}

const editar_contato = (id_contato, nome, url_logo) => {
  if(!url_logo) url_logo =''
  service.editar(id_contato, nome, url_logo)
      .then( response => {
        Swal.fire('Contato editado com sucesso!', '', 'success').then((result) => {
          window.location.reload();
        });
      }).catch (erro => {
          console.log(erro.response)
          alert(erro.response.data)
      })
}

export const confirmar_remover = (id_contato) => {
    Swal.fire({  
      title: 'Removar contato?',  
      type: 'warning',  
      showCancelButton: true,  
      confirmButtonColor: '#3085d6',  
      cancelButtonColor: '#d33',  
      confirmButtonText: 'Yes!'  
    }).then((result) => {  
      if (result.isConfirmed){
        remover_contato(id_contato)
      }
    });
  }

const remover_contato = (id_contato) => {
    service.remover(id_contato)
      .then( response => {
        Swal.fire('Contato removido com sucesso.', '', 'success').then((result) => {
          window.location.reload();
        });
      }).catch (erro => {
          console.log(erro.response)
          alert(erro.response.data)
      })
  }






