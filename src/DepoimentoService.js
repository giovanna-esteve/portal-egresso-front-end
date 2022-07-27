import ApiService from "./ApiService"
class DepoimentoService extends ApiService {
    constructor () {
        super('/api/depoimentos')
    }

    recentes() {
        return this.get(`/recentes`)
    }

    listar(id_egresso) {
        return this.get(`/listar?id_egresso=${id_egresso}`)
    }

    cadastrar(texto , egresso_id) {
        return this.post(`/cadastrar?texto=${texto}&egresso_id=${egresso_id}`)
    }

    editar(id, texto) {
        return this.post(`/editar?id=${id}&texto=${texto}`)
    }

    remover(id) {
        return this.post(`/remover?id=${id}`)
    }

}
export default DepoimentoService