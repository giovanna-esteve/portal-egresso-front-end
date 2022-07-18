import ApiService from "./ApiService"
class CursoEgressoService extends ApiService {
    constructor () {
        super('/api/cursos_egresso')
    }

    listar(id_egresso) {
        return this.get(`/listar?id_egresso=${id_egresso}`)
    }

    cadastrar(curso_egresso) {
        return this.post(`/cadastrar`, curso_egresso)
    }

    remover(id_curso_egresso) {
        return this.post(`/remover?`,id_curso_egresso)
    }

}
export default CursoEgressoService