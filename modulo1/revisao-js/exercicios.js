// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   
    return(array.length)
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return (array.reverse())
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort(function(a, b) {
        return a - b
      })
      return array
     
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let i=0
    let novaArray =[]
    while(i<array.length){
        if(array[i]% 2 === 0){
    novaArray.push(array[i])
        }
        i++
    }
    return novaArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let i=0
    let novaArray =[]
    while(i<array.length){
        if(array[i]% 2 === 0){
    novaArray.push(array[i]*array[i])
        }
        i++
    }
    return novaArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let i=0
    let maiorNumero = 0
    while(i< array.length){
        if(array[i] > maiorNumero){
    maiorNumero = array[i]
        }
        i++
    }
    
    return(maiorNumero)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = 0
    let menorNumero = 0
        if(num1>num2){
            maiorNumero = num1
            menorNumero = num2
        }else{
            maiorNumero = num2
            menorNumero = num1
        }
    
        var maiorDivisivelPorMenor = (maiorNumero%menorNumero===0)
        var diferenca = maiorNumero - menorNumero
          
    return {maiorNumero,maiorDivisivelPorMenor,diferenca}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i);
        }
    }
    return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA===ladoB&&ladoA===ladoC){
        return "Equilátero"
    }else if(ladoA!==ladoB&&ladoA!==ladoC&&ladoB!==ladoC){
        return "Escaleno"
    }else if(ladoA===ladoB&&ladoA!==ladoC){
        return "Isósceles"
    }else if(ladoA===ladoC&&ladoA!==ladoB){
        return "Isósceles"
    }else{
        return "Isósceles"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
    let i=0
    let maiorNumero = 0
    let segundoMaiorNumero = 0
    while(i< array.length){
        if(array[i] > maiorNumero){
    maiorNumero = array[i]
        }
        i++
    }
    array.splice(array.indexOf(maiorNumero),1)
    
    
    for(let i = 0; i< array.length;i++){
        if(array[i] > segundoMaiorNumero){
            segundoMaiorNumero = array[i]
        }
    }
    
   
    
    let menorNumero = maiorNumero
    let segundoMenorNumero = maiorNumero
    
    for(let i = 0; i< array.length;i++){
        if(array[i] < menorNumero){
            menorNumero = array[i]
        }
    }
    
   
    
    array.splice(array.indexOf(menorNumero),1)
    
   
    
    for(let i = 0; i< array.length;i++){
        if(array[i] < segundoMenorNumero){
            segundoMenorNumero = array[i]
        }
    }
    
    var novoArray=[]
    novoArray.push(segundoMaiorNumero,segundoMenorNumero)
    return novoArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return "Venha assistir ao filme ",$(filme.nome),", de ",$(filme.ano),", dirigido por ",$(filme.diretor)," e estrelado por ",$(filme.atores),"."
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const novoObjeto = {
       ...pessoa,
       nome: "ANÔNIMO"
   }
   return novoObjeto
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

    let permissao = (pessoas) =>{
        return pessoas.altura > 1.5 && pessoas.idade > 14 && pessoas.idade < 60
    }
        
    let pessoasQuePodemBrincar = pessoas.filter(permissao)
    
    return pessoasQuePodemBrincar
 
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

    const zeraConta = contas.filter((contas) =>{
        return contas.compras = []
    })
 
    return zeraConta
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}