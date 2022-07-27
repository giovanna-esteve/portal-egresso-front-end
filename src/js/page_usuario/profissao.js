import ProfEgressoService from '../../ProfEgressoService';
import Swal from "sweetalert2"; 

const service = new ProfEgressoService()

export const salvar_profissao = (acao, id_profissao, id_egresso, empresa, descricao, cargoId, salarioId) => {
    if(acao === 'cadastrar') cadastrar_profissao(id_egresso, empresa, descricao, cargoId, salarioId);
    if(acao === 'editar') editar_profissao(id_profissao, id_egresso, empresa, descricao, cargoId, salarioId);
}

export const confirmar_remover = (id_profissao) => {
    Swal.fire({  
        title: 'Deletar profissão?',  
        type: 'warning',  
        showCancelButton: true,  
        confirmButtonColor: '#3085d6',  
        cancelButtonColor: '#d33',  
        confirmButtonText: 'Yes!'  
    }).then((result) => {  
        if (result.isConfirmed){
        remover_profissao(id_profissao)
        }
    });
};

const cadastrar_profissao = (id_egresso, empresa, descricao, cargoId, salarioId) => {
    service.cadastrar(id_egresso, empresa, descricao, cargoId, salarioId)
    .then( response => {
        Swal.fire('Profissão salvo com sucesso!', '', 'success').then((result) => {
            window.location.reload();
        });
    }).catch (erro => {
        console.log(erro.response)
        alert(erro.response.data)
    })
};

const editar_profissao = (id_profissao, id_egresso, empresa, descricao, cargoId, salarioId) => {
    if(!descricao) descricao = ''
    service.editar(id_profissao, id_egresso, empresa, descricao, cargoId, salarioId)
        .then( response => {
            Swal.fire('Profissão salvo com sucesso!', '', 'success').then((result) => {
                window.location.reload();
            });
        }).catch (erro => {
            console.log(erro.response)
            alert(erro.response.data)
        })
};

const remover_profissao = (id_profissao) => {
    service.remover(id_profissao)
    .then( response => {
        Swal.fire('Profissão removido.', '', 'success').then((result) => {
        window.location.reload();
        }); 
    }).catch (erro => {
        console.log(erro.response)
        alert(erro.response.data)
    })
};
