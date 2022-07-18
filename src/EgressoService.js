import ApiService from "./ApiService"
class EgressoService extends ApiService {
    constructor () {
        super('/api/egressos')
    }

    listar() {
        return this.get(`/listar`)
    }

    testarCadastro(egresso) {
        return this.post(`/testarCadastro`,egresso)
    }

    busca_dados_pagina_egresso(id) {
        return this.get(`/dados_egresso?id=${id}`)
    }
}
export default EgressoService