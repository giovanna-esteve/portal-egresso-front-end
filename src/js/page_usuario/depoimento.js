import DepoimentoService from '../../DepoimentoService';
import ContatoEgressoService from '../../ContatoEgressoService';
import Swal from "sweetalert2"; 

const service = new DepoimentoService()

export const salvar_depoimento = (acao, id_depoimento,  texto, id_egresso) => {
    if(acao === 'editar') editar_depoimento(id_depoimento,  texto);
    if(acao === 'cadastrar') cadastrar_depoimento(texto, id_egresso);
}

export const confirmar_remover = (id_depoimento) => {
    Swal.fire({  
        title: 'Deletar depoimento?',  
        type: 'warning',  
        showCancelButton: true,  
        confirmButtonColor: '#3085d6',  
        cancelButtonColor: '#d33',  
        confirmButtonText: 'Yes!'  
    }).then((result) => {  
        if (result.isConfirmed){
        remover_depoimento(id_depoimento)
        }
    });
};

const cadastrar_depoimento = (texto, id_egresso) => {
    service.cadastrar(texto, id_egresso)
    .then( response => {
        Swal.fire('Depoimento cadastrado com sucesso!', '', 'success').then((result) => {
            window.location.reload();
        });
    }).catch (erro => {
        console.log(erro.response)
        alert(erro.response.data)
    })
};

const editar_depoimento = (id_depoimento, texto ) => {
    service.editar(id_depoimento, texto)
    .then( response => {
        Swal.fire('Depoimento editado com sucesso!', '', 'success').then((result) => {
        window.location.reload();
        });
    }).catch (erro => {
        console.log(erro.response)
        alert(erro.response.data)
    })
};

const remover_depoimento = (id_depoimento) => {
    service.remover(id_depoimento)
    .then( response => {
        Swal.fire('Depoimento removido.', '', 'success').then((result) => {
        window.location.reload();
        }); 
    }).catch (erro => {
        console.log(erro.response)
        alert(erro.response.data)
    })
};
