import CursoEgressoService from '../../CursoEgressoService';
import Swal from "sweetalert2"; 

const service = new CursoEgressoService()

export const salvar_curso = (curso_egresso) => {
    service.cadastrar(curso_egresso)
        .then( response => {
            Swal.fire('Curso salvo com sucesso!', '', 'success').then((result) => {
                window.location.reload();
            });
        }).catch (erro => {
            console.log(erro.response)
            alert(erro.response.data)
        })
}

export const confirmar_remover = (id_curso_egresso) => {
    Swal.fire({  
        title: 'Deletar curso?',  
        type: 'warning',  
        showCancelButton: true,  
        confirmButtonColor: '#3085d6',  
        cancelButtonColor: '#d33',  
        confirmButtonText: 'Yes!'  
    }).then((result) => {  
        if (result.isConfirmed){
        remover_curso_egresso(id_curso_egresso)
        }
    });
};

const remover_curso_egresso = (id_curso_egresso) => {
    service.remover(id_curso_egresso)
    .then( response => {
        Swal.fire('Curso removido.', '', 'success').then((result) => {
        window.location.reload();
        }); 
    }).catch (erro => {
        console.log(erro.response)
        alert(erro.response.data)
    })
};