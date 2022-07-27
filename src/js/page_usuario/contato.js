import ContatoEgressoService from '../../ContatoEgressoService';
import Swal from "sweetalert2"; 

const service = new ContatoEgressoService()

export const btn_add = ({variant:"dark",texto:"editar os contatos"})

export const salvar_contato = (contatoEgressoList) => {
    service.cadastrar(contatoEgressoList)
            .then( response => {
                Swal.fire('Contato salvo com sucesso!', '', 'success').then((result) => {
                    window.location.reload();
                });
            }).catch (erro => {
                console.log(erro.response)
                alert(erro.response.data)
            })
}

