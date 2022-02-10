import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import { users } from "./data";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server Sistema Bancário in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;

/*
Pegar Saldo
O usuário deve conseguir verificar o "SALDO" da sua conta, passando o seu nome e o seu CPF. - ok
 |   |   |   |
 V   V   V   V
*/
app.get('/users/:name/:cpf', (req: Request, res: Response) => {

    try {
        const name = req.params.name
        const cpf = req.params.cpf

        const result: any = []

        for (let user of users) {
            if (user.name === name && user.cpf === cpf) {
                result.push(user.balance)
                res.status(200).send(result)

            }
        }

        if (!name || !cpf) {
            throw new Error('Nome ou CPF não informados!')
        }

        if (!result[0]) {
            throw new Error("Usuário não encontrado")
        }


    } catch (error: any) {
        res.send(error.message)
    }
})


/*
Criar Conta
  Um cliente pode criar uma conta no banco se tiver idade igual ou maior do que 18 anos. - falta função para maior de 18 <=
  Ele deve informar: nome, CPF e data de nascimento. -ok
  As contas devem guardar essas informações e uma propriedade para representar o saldo do usuário.- ok
  Além disso devem ser guardados, também, todos os gastos do usuário num array de extrato
(possuindo o valor, a data e uma descrição).- ok
   Lembre-se de que todas as contas, ao serem criadas, começam com o saldo zerado. Não podem existir
dois usuários diferentes com o mesmo CPF. - ok
 |   |   |   |
 V   V   V   V
*/
app.post('/createaccount', (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const { name, cpf, date } = req.body

        for (let i = 0; i < users.length; i++) {
            if (users[i].cpf === cpf) {
                errorCode = 404
                throw new Error("O CPF informado ja possui cadastrado")
            }
        }
        users.push({
            name,
            cpf,
            date,
            balance: 0,
            extract: [],
            bill: []
        })
        res.send(users)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

/*
Adicionar saldo 
O usuário deve conseguir adicionar saldo à sua conta, passando seu nome, o CPF e o valor que desejar.
*/

app.put('/users', (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name:string = String(req.body.name)
        const cpf = req.body.cpf
        const newBalance: number = Number(req.body.balance)
        let result:boolean = false
        let userData:any= []


       if (!name || !cpf || !newBalance){
        
        throw new Error('Nome, CPF ou valor não informados!')
       }

        for (let i = 0; i < users.length; i++){
            
            if (users[i].name === name && users[i].cpf === cpf){
                result = true
               users[i].balance = users[i].balance + newBalance
               userData.push(users[i].balance)
            }
          }
             
        if(result === false){
            throw new Error("Usuário não encontrado")
        }
        

        

        res.status(200).send(userData)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})


/*
Transferência Interna
   A transferência entre contas é muito mais interessante ao banco do que aos clientes em si, porque,
 com esta funcionalidade, ela consegue influenciar seus clientes a convencerem conhecidos a migrarem para o banco.
  Para realizar esta transferência, o usuário deve informar o seu nome, o seu CPF, o nome do destinatário,
 o CPF do destinatário e o valor em si. 
   Transferências não podem ser agendadas e devem respeitar o saldo do usuário remetente.
*/
app.put('/users/transfer/:name/:cpf', (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.params.name
        const cpf = req.params.cpf
        const value: any = Number(req.body.value)
        const recipientName:string= String(req.body.recipientName)
        const recipientCPF:string= String(req.body.recipientCPF)
        console.log(recipientCPF)

        if(!recipientName || !recipientCPF || !value){
            throw new Error("Nome, Cpf do destinatário ou valor de transferència não informado")
        }        

        for (let i = 0; i < users.length; i++){
            
            if (users[i].name === name && users[i].cpf === cpf){
              if(users[i].balance - value <0){
                throw new Error("Saldo Insuficiente")
              }else{
                users[i].balance = users[i].balance - value  
              }
               
            }

            if(users[i].name === recipientName && users[i].cpf === recipientCPF){
                users[i].balance = users[i].balance + value
             }

          }

        res.send(users)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

