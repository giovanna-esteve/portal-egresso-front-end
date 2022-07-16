import ApiService from "./ApiService"
class CursoService extends ApiService {
    constructor () {
        super('/api/cursos')
    }

    listar() {
        return this.get(`/listar`)
    }

    cadastrar(nome, nivel) {
        return this.post(`/cadastrar?nome=${nome}&nivel=${nivel}`)
    }

    editar(id, nome, nivel) {
        return this.post(`/editar?id=${id}&nome=${nome}&nivel=${nivel}`)
    }

    remover(id) {
        return this.post(`/remover?id=${id}`)
    }

}
export default CursoService