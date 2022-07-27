import ApiService from "./ApiService"
class ProfEgressoService extends ApiService {
    constructor () {
        super('/api/profissoes')
    }

    listar(id_egresso) {
        return this.get(`/listar?id_egresso=${id_egresso}`)
    }

    cadastrar(id, empresa, descricao, cargoId, salarioId) {
        return this.post(`/cadastrar?id=${id}&empresa=${empresa}&descricao=${descricao}&cargoId=${cargoId}&salarioId=${salarioId}`)
    }

}
export default ProfEgressoService