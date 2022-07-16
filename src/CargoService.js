import ApiService from "./ApiService"
class CargoService extends ApiService {
    constructor () {
        super('/api/cargos')
    }

    listar() {
        return this.get(`/listar`)
    }

    cadastrar(nome, descricao) {
        return this.post(`/cadastrar?nome=${nome}&descricao=${descricao}`)
    }

    editar(id, nome, descricao) {
        return this.post(`/editar?id=${id}&nome=${nome}&descricao=${descricao}`)
    }

    remover(id) {
        return this.post(`/remover?id=${id}`)
    }

}
export default CargoService