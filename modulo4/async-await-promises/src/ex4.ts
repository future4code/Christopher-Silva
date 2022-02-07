import axios from "axios"
import { baseURL } from "./baseURL"

/*
- Exercício 4
    
    Vamos continuar as nossas funcionalidades da API. Crie uma função que permita criar uma nova notícia.
*a.* Qual é o tipo dessa função? Por quê?

b. Implemente a função solicitada

async function createNews(
  title: string,
  content: string,
  date: number
): Promise<void> {
  await axios.put(`${baseUrl}/news`, {
    title: title,
    content: content, 
    date: date
  });
}
*/

type Subscriber = {
id:string,
name: string,
email:string
 }

type News = {
  title: string,
  content:string,
  date: number
}

const news:News = {
  title: "Nova notícia",
  content: "conteúdo",
  date: Date.now()
}

const createNews = (news: News):Promise<any> => {
  return axios.put(`${baseURL}/news`,news)
 }

const getAllSubscribers = async ():Promise<any> => {
const response = await axios.get(`${baseURL}/subscribers`)
return response.data
 }

 
const getSubscribersIds = (subscribers: Subscriber[]) => {
  return subscribers.map((subscriber:any)=>{
    return subscriber.id
  })

 }

const notifyAllSubscribers = async (ids:string[]):Promise<void> => {
  for(let id of ids){
   try {
    await axios
    .post(`${baseURL}/notifications`,{
      subscriberId: id,
      message: "confira ultimas noticias"
    })
    console.log("notificação enviada")
    
       } catch (err) {
  console.log("erro de notificação")


       }

  }

 }

const main = async ():Promise<void> => {
 try {
  await createNews(news);
  const subscribers = await getAllSubscribers()
  const ids = await getSubscribersIds(subscribers)
  await notifyAllSubscribers(ids)
 } catch (err:any) {
   console.log(err.response?.data || err.message)
 }
 }
 main()


 