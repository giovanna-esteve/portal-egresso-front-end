import ApiService from "./ApiService"
class UsuarioService extends ApiService {
    constructor () {
        super('/api/usuarios')
    }

    autenticar(email, senha) {
        return this.post(`/autenticar?email=${email}&senha=${senha}`)
    }

    listarAdms() {
        return this.get(`/listar`)
    }

    cadastrarAdm(nome, email, senha) {
        return this.post(`/cadastrarAdm?nome=${nome}&email=${email}&senha=${senha}`)
    }

    remover(id) {
        return this.post(`/remover?id=${id}`)
    }

}
export default UsuarioService