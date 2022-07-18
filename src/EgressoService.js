import ApiService from "./ApiService"
class EgressoService extends ApiService {
    constructor () {
        super('/api/egressos')
    }

    listar() {
        return this.get(`/listar`)
    }

    cadastrarEgresso(egresso) {
        return this.post(`/cadastrarEgresso`,egresso)
    }

    busca_dados_pagina_egresso(id) {
        return this.get(`/dados_egresso?id=${id}`)
    }
}
export default EgressoService