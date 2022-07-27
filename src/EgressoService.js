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

    editar(id, nome, email, cpf, resumo) {
        return this.post(`/editar?id=${id}&nome=${nome}&email=${email}&cpf=${cpf}&resumo=${resumo}`)
    }

    buscar_dados_egresso(id) {
        return this.get(`/buscar_dados_egresso?id=${id}`)
    }

    busca_dados_pagina_egresso(id) {
        return this.get(`/dados_egresso?id=${id}`)
    }

    egressoAtual() {
        return this.get(`/egresso`)
    }
}
export default EgressoService