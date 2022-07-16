import ApiService from "./ApiService"
class FaixaSalarioService extends ApiService {
    constructor () {
        super('/api/salarios')
    }

    listar() {
        return this.get(`/listar`)
    }

    cadastrar(descricao) {
        return this.post(`/cadastrar?descricao=${descricao}`)
    }

    editar(id, descricao) {
        return this.post(`/editar?id=${id}&descricao=${descricao}`)
    }

    remover(id) {
        return this.post(`/remover?id=${id}`)
    }

}
export default FaixaSalarioService