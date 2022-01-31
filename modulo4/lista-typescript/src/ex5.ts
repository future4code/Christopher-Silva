
type ColaborInfo = {
    name:string,
    email:string,
    role:string,
}

const dadosColaboradoes:ColaborInfo[]= [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
]

const pegaEmails = dadosColaboradoes.map((colaborador):Object=>{
    return (
        colaborador.email
    )   
})

console.log(pegaEmails)