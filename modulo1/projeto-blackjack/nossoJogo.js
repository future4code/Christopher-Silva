/*
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
 * 

*/
   

/*
if(confirm("Quer jogar uma partida?")) {
      

   
   var cartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 , 12, 13]
   const naipes = ["♥️", "♣️", "♦️","♠️"]

const sorteioCarta = (carta) =>{
  const primeiraCarta = Math.floor(Math.random() * cartas.length)

  return cartas[primeiraCarta]
}

const sorteioNaipe = (naipe) =>{
   const naipeDaCarta = Math.floor(Math.random() * naipes.length)
   return naipes[naipeDaCarta]
}


const cartaSorteadau1=sorteioCarta(cartas)
const naipeSorteadou1=sorteioNaipe(naipes)
const cartaSorteadau2=sorteioCarta(cartas)
const naipeSorteadou2=sorteioNaipe(naipes)

const somaCartasUsuario = cartaSorteadau1+cartaSorteadau2

const cartasLetrau = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J" , "Q", "K"]
const letraouNumu1 = cartasLetrau[cartaSorteadau1-1]
const letraouNumu2 = cartasLetrau[cartaSorteadau2-1]

console.log("Usuário - cartas: ",letraouNumu1+naipeSorteadou1," ",letraouNumu2+naipeSorteadou2,"  - pontuação",somaCartasUsuario)


const cartaSorteada1=sorteioCarta(cartas)
const naipeSorteado1=sorteioNaipe(naipes)
const cartaSorteada2=sorteioCarta(cartas)
const naipeSorteado2=sorteioNaipe(naipes)

const somaCartasComputador = cartaSorteada1+cartaSorteada2

const cartasLetra = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J" , "Q", "K"]
const letraouNum1 = cartasLetra[cartaSorteada1-1]
const letraouNum2 = cartasLetra[cartaSorteada2-1]

console.log("Usuário - cartas: ",letraouNum1+naipeSorteado1," ",letraouNum2+naipeSorteado2,"  - pontuação",somaCartasComputador) 

    if(somaCartasUsuario>somaCartasComputador){
     console.log("O usuário ganhou!")
    }else if (somaCartasUsuario<somaCartasComputador){
     console.log("O computador ganhou!") 
    }else{
     console.log ("Empate!")
    }

} else {
 console.log("O jogo acabou")
}

*/
  




