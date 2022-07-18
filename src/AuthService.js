import ApiService from "./ApiService"
import {login} from "./Auth"



class AuthService extends ApiService {
    constructor () {
        super('api')
    }

    autenticar(email, senha) {
        var request = this.post(`/login`, {
            email: email,
            senha: senha
        })
        request.then( response => {
            login(response.data)
        }).catch (erro => {
            console.log(erro.response)
        })

        return request;
    }

}
export default AuthService;