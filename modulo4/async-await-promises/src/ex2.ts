import axios from "axios"
import { baseURL } from "./baseURL"


/*
Exercício 2
*a.* Explique, com suas palavras, a diferença da sintaxe de
 uma função nomeada assíncrona e uma arrow function assíncrona

 R. função nomeada assincrona é uma função que é denominada assincrona ex. "async function getSubscribers():"
 arrow function assíncrona é uma função que executa uma função assíncrona

b. Implemente a função solicitada, usando arrow function

const getSubscribers = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };
*/
axios.get(`${baseURL}/subscribers/idInvalido/notifications`)
.then(res=>console.log(res.data))
.catch(err => console.log(err.response?.data || err.message))


