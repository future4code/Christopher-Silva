import axios from 'axios';
import { BASE_URL } from '../constants/urls'



export const login = (body, clear,navigate) => {
    axios.post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            console.log(res.data)
            localStorage.setItem('token', res.data.token)
            navigate("/") 
            clear()
        })
        .catch((err) => {
            console.log("erro do login",err.response)
            alert("E-mail/senha incorretos ou usuário não cadastrado")
        })
}

export const registUser = (body, clear,navigate) => {
    axios.post(`${BASE_URL}/users/signup`, body)
        .then((res) => {
            console.log(res.data)
            localStorage.setItem('token', res.data.token)
            navigate("/") 
            clear()
        })
        .catch((err) => {
            console.log("erro do cadastro",err.response)
            alert("Erro no cadastro")
        })
}