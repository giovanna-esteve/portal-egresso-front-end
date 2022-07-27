import axios from 'axios'
import {getToken, isAuthenticated, logout} from './Auth'

const instance = axios.create({
    baseURL: 'http://localhost:8080',
});


instance.interceptors.request.use(async config => {
    if(isAuthenticated()){
        const token = getToken();
        if (token) {
            config.headers.Authorization = `${token}`;
        }
    }
    return config;
});

class ApiService {
    constructor (apiUrl) {
        this.apiUrl = apiUrl
    }
    post(url, objeto) {
        return instance.post(`${this.apiUrl}${url}`, objeto)
    }
    put(url, objeto) {
        return instance.put(`${this.apiUrl}${url}`, objeto)
    }
    delete(url) {
        return instance.delete(`${this.apiUrl}${url}`)
    }
    get(url) {
        return instance.get(`${this.apiUrl}${url}`)
    }
}

export default ApiService