import ApiService from "./ApiService"
class ProfEgressoService extends ApiService {
    constructor () {
        super('/api/profissoes')
    }

    listar(id_egresso) {
        return this.get(`/listar?id_egresso=${id_egresso}`)
    }

    cadastrar(id_egresso, empresa, descricao, cargoId, salarioId) {
        return this.post(`/cadastrar?id_egresso=${id_egresso}&empresa=${empresa}&descricao=${descricao}&cargoId=${cargoId}&salarioId=${salarioId}`)
    }

    editar(id, id_egresso, empresa, descricao, cargoId, salarioId) {
        return this.post(`/editar?id=${id}&id_egresso=${id_egresso}&empresa=${empresa}&descricao=${descricao}&cargoId=${cargoId}&salarioId=${salarioId}`)
    }

    remover(id) {
        return this.post(`/remover?id=${id}`)
    }

}
export default ProfEgressoService