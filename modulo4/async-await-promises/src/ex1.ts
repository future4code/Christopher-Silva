import axios from "axios"
import { baseURL } from "./baseURL"


/*
Exercício 1
*a.* Qual endpoint você deve utilizar para isso?
R. /subscribers

b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?
com funções ue retornam promises

c. Implemente uma função nomeada que faça o que foi pedido.

async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };

*/

async function getSubscribers(): Promise<any[]> {

const response = await axios.get(`${baseURL}/subscribers`)
return response.data

}

getSubscribers

axios.get(`${baseURL}/subscribers`)
.then(res=>console.log(res.data))
.catch(err => console.log(err.response?.data || err.message))