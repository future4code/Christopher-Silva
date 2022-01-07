import axios from 'axios';
import { BASE_URL } from '../constants/Url'



export const login = (body, clear,navigate) => {
    axios.post(`${BASE_URL}/user/login`, body)
        .then((res) => {
            console.log(res.data)
            localStorage.setItem('token', res.data.token)
            navigate("/RecipesListPage") 
            clear()
        })
        .catch((err) => {
            console.log("erro do login",err.response)
            alert("E-mail/senha incorretos ou usuário não cadastrado")
        })
}

export const signUp = (body, clear,navigate) => {
    
    console.log("body do sign",body)
    console.log("base url",BASE_URL)

    axios.post(`${BASE_URL}/user/signup`,body)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
             navigate("/RecipesListPage")
            console.log("res",res.data)
        })
        .catch((err) => {
            console.log("erro do cadastro",err.response)
            
        })
}