import ApiService from "./ApiService"
class UsuarioService extends ApiService {
    constructor () {
        super('/api/usuarios')
    }

    autenticar(email, senha) {
        return this.post(`/autenticar?email=${email}&senha=${senha}`)
    }
}
export default UsuarioService