import ApiService from "./ApiService"
class ContatoEgressoService extends ApiService {
    constructor () {
        super('/api/contatos_egresso')
    }

    listar(id_egresso) {
        return this.get(`/listar?id_egresso=${id_egresso}`)
    }

    cadastrar(contatoEgressoList) {
        return this.post(`/cadastrar`, contatoEgressoList)
    }

}
export default ContatoEgressoService