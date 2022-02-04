type DataClientes = {
    cliente:string,
    saldoTotal:number,
    debitos:number[],
}

const clientes:DataClientes[]=[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const pegaNegativados = clientes.map((cliente)=>{
   // const reducer = (previousValue:number, currentValue:number) => previousValue + currentValue;
  // return (cliente.debitos.reduce(reducer))
 
  

})

console.log(pegaNegativados)