import axios from "axios"
import { baseURL } from "./baseURL"

/*
Exercício 3
*a.* Se apenas trocarmos o retorno da função para: `Promise<user[]>` , teremos algum erro de tipagem?

b. É boa prática fazermos um mapeamento do resultado de uma Promise, caso seja indicado que ela retorne um `Promise<any>`. Explique com as suas palavras o porquê de fazermos isso
mapeamento é feito para organizarmos nosso código e testarmos um passo por vez para verificar o funcionamento de cada passo

c. Reimplemente a função, corretamente.

*/
const news = {
  title: "Nessa semana o bicho vai pega pra turma Carver",
  content: "Se não der nó igual introdução ao React, tamo safe",
  date: Date.now()
}

type user = {
	id: string;
	name: string;
	email: string;
}

const createNews = (news: any) => {
   return axios.put(`${baseURL}/news`,news)
}

const getAllSubscribers = () => {
  return axios
  .get(`${baseURL}/subscribers`)
  .then(res => res.data)
}

const getSubscribersIds = (subscribers: any) => {
  return subscribers.map((subscriber:any)=>{
    return subscriber.id
  })
}

const notifyAllSubscribers = (ids:string[]) => {
 // console.log("chegou do getSubscribersIds",ids)
  for(let id of ids){
    axios
    .post(`${baseURL}/notifications`,{
      subscriberId: id,
      message: "confira ultimas noticias"
    })
    .then (()=>{console.log("notificação enviada")})
    .catch(()=>{console.log("erro de notificação")})
  }
}

 createNews(news)// criar noticia
// .then(console.log)                
   .then(getAllSubscribers)      // buscar assinantes
//   .then(console.log)
   .then(getSubscribersIds)      // extrair id's (etapa síncrona)
   .then(notifyAllSubscribers)   // enviar notificacoes
.catch(err => console.log(err.response?.data || err.message)) // tratamento de erros
.then(console.log)