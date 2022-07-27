import EgressoService from '../../EgressoService';
import CursoEgressoService from '../../CursoEgressoService';
import Swal from "sweetalert2"; 

export const btn_add = ({variant:"secondary",texto:"+ novo"})
export const btn_update = ({variant:"secondary",texto:"Atualizar"})
export const btn_edit = ({variant:"dark",texto:"editar"})


const serviceEgresso = new EgressoService()

export const salvar_dados_egresso = (id, nome, email, cpf, resumo) => {
    serviceEgresso.editar(id, nome, email, cpf, resumo)
    .then( response => {
    Swal.fire('Dados atualizados com sucesso!', '', 'success').then((result) => {
        window.location.reload();
    });
    }).catch (erro => {
        alert(erro.response.data)
        console.log(erro.response)
    })
  };





