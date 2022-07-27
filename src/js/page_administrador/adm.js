import UsuarioService from '../../UsuarioService';
import Swal from "sweetalert2"; 

const service = new UsuarioService()


export const btn_add = ({classe:"btn btn-primary mt-3",texto:"Cadastrar"})

  

  export const salvar_administrador = (nome, email, senha) => {
    service.cadastrarAdm(nome, email, senha)
      .then( response => {
        Swal.fire('Administrador cadastrado com sucesso!', '', 'success').then((result) => {
          window.location.reload();
        }); 
      }).catch (erro => {
          console.log(erro.response)
          alert(erro.response.data)
      })
}

export const confirmar_remover = (id_usuario) => {
    Swal.fire({  
      title: 'Removar administrador?',  
      type: 'warning',  
      showCancelButton: true,  
      confirmButtonColor: '#3085d6',  
      cancelButtonColor: '#d33',  
      confirmButtonText: 'Yes!'  
    }).then((result) => {  
      if (result.isConfirmed){
        remover_usuario_adm(id_usuario)
      }
    });
  }

const remover_usuario_adm = (id_usuario) => {
    service.remover(id_usuario)
      .then( response => {
        Swal.fire('Administrador removido com sucesso.', '', 'success').then((result) => {
          window.location.reload();
        });
      }).catch (erro => {
          console.log(erro.response)
          alert(erro.response.data)
      })
  }






