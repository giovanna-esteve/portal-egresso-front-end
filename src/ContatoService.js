import ApiService from "./ApiService"
class ContatoService extends ApiService {
    constructor () {
        super('/api/contatos')
    }

    listar() {
        return this.get(`/listar`)
    }

    cadastrar(nome, url_logo) {
        return this.post(`/cadastrar?nome=${nome}&url_logo=${url_logo}`)
    }

    editar(id, nome, url_logo) {
        return this.post(`/editar?id=${id}&nome=${nome}&url_logo=${url_logo}`)
    }

    remover(id) {
        return this.post(`/remover?id=${id}`)
    }

}
export default ContatoService