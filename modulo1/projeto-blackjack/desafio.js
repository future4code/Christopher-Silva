/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


    
    if(confirm("Quer jogar uma partida de Blajack?")) {
      

   
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
   
   
   const cartasLetrau = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J" , "Q", "K"]

   
   const cartasLetra = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J" , "Q", "K"]


   const cartasJogador=[]
   const cartasComputador=[]
   const naipesJogador=[]
   const naipesComputador=[]
   cartasJogador.push(sorteioCarta(cartas),sorteioCarta(cartas))
   naipesJogador.push(sorteioNaipe(naipes),sorteioNaipe(naipes))
   cartasComputador.push(sorteioCarta(cartas),sorteioCarta(cartas))
   naipesComputador.push(sorteioNaipe(naipes),sorteioNaipe(naipes))

   console.log(cartasJogador)

   var somaCartasJogador = 0;
for(var i = 0; i < cartasJogador.length; i++) {
    somaCartasJogador += cartasJogador[i]
}

 console.log(somaCartasJogador)

    var somaCartasComputador = 0;
for(var i = 0; i < cartasComputador.length; i++) {
    somaCartasComputador += cartasComputador[i]
}

//caso Jogador queira terminar o jogo
//final
//final
 
//jogador comprando cartas
//const jogadorComprandoCartas= (cartasJogador,naipesJogador) =>{
//   cartasJogador.push(sorteioCarta(cartas))
//   naipesJogador.push(sorteioNaipe(naipes))
//}



//caso jogador ultrapasse 21
const jogadorComMaisDe21 = (somaCartasJogador,somaCartasComputador) =>{ 
   if(somaCartasComputador>21){

      window.alert("Usuário Cartas: "+cartasJogador[0]+naipesJogador[0]+" "+cartasJogador[1]+naipesJogador[1]+" - pontuação:"+somaCartasJogador+
     "\n"+"Computador Cartas: "+cartasComputador[0]+naipesComputador[0]+cartasComputador[1]+naipesComputador[1]+" - pontuação:"+somaCartasComputador+
     "\n"+"Empate!")

   }else if(somaCartasComputador < 22){
      window.alert("Usuário Cartas: "+cartasJogador[0]+naipesJogador[0]+" "+cartasJogador[1]+naipesJogador[1]+" - pontuação:"+somaCartasJogador+
     "\n"+"Computador Cartas: "+cartasComputador[0]+naipesComputador[0]+cartasComputador[1]+naipesComputador[1]+" - pontuação:"+somaCartasComputador+
    "\n"+"O Computador Ganhou")

   }
}   

//caso jogador ultrapasse 21 ^

//primeira tela
if(confirm("Suas cartas são "+cartasJogador[0]+naipesJogador[0]+" "+cartasJogador[1]+naipesJogador[1]+". A carta revelada do computador é"+cartasComputador[0]+naipesComputador[0]+
"\n"+"Quer outra carta?")) {
       
    //jogadorComprandoCartas(cartasJogador,naipesJogador)
    cartasJogador.push(sorteioCarta(cartas))
    naipesJogador.push(sorteioNaipe(naipes))
    somaCartasJogador = 0;

    for(var i = 0; i < cartasJogador.length; i++) {
    somaCartasJogador += cartasJogador[i]
    }

    if(somaCartasJogador>21){
         //caso jogador ultrapasse 21

       if(somaCartasComputador>21){

        window.alert("Usuário Cartas: "+cartasJogador[0]+naipesJogador[0]+" "+cartasJogador[1]+naipesJogador[1]+" - pontuação:"+somaCartasJogador+
       "\n"+"Computador Cartas: "+cartasComputador[0]+naipesComputador[0]+cartasComputador[1]+naipesComputador[1]+" - pontuação:"+somaCartasComputador+
       "\n"+"Empate!")

       }else if(somaCartasComputador < 22){
        window.alert("Usuário Cartas: "+cartasJogador[0]+naipesJogador[0]+" "+cartasJogador[1]+naipesJogador[1]+" - pontuação:"+somaCartasJogador+
       "\n"+"Computador Cartas: "+cartasComputador[0]+naipesComputador[0]+cartasComputador[1]+naipesComputador[1]+" - pontuação:"+somaCartasComputador+
       "\n"+"O Computador Ganhou")

       }
  

       //caso jogador ultrapasse 21 ^
      }else{
         //segunda tela
         if(confirm("Suas cartas são "+cartasJogador[0]+naipesJogador[0]+" "+cartasJogador[1]+naipesJogador[1]+" "+cartasJogador[2]+naipesJogador[2]+". A carta revelada do computador é"+cartasComputador[0]+naipesComputador[0]+
         "\n"+"Quer outra carta?")){
         
            cartasJogador.push(sorteioCarta(cartas))
            naipesJogador.push(sorteioNaipe(naipes))


            if(somaCartasJogador>21){
               if(somaCartasComputador>21){

                  window.alert("Usuário Cartas: "+cartasJogador[0]+naipesJogador[0]+" "+cartasJogador[1]+naipesJogador[1]+" "+cartasJogador[2]+naipesJogador[2]+" - pontuação:"+somaCartasJogador+
                 "\n"+"Computador Cartas: "+cartasComputador[0]+naipesComputador[0]+cartasComputador[1]+naipesComputador[1]+" - pontuação:"+somaCartasComputador+
                 "\n"+"Empate!")
          
                }else if(somaCartasComputador < 22){
                  window.alert("Usuário Cartas: "+cartasJogador[0]+naipesJogador[0]+" "+cartasJogador[1]+naipesJogador[1]+" "+cartasJogador[2]+naipesJogador[2]+" - pontuação:"+somaCartasJogador+
                 "\n"+"Computador Cartas: "+cartasComputador[0]+naipesComputador[0]+cartasComputador[1]+naipesComputador[1]+" - pontuação:"+somaCartasComputador+
                 "\n"+"O Computador Ganhou")
          
               }
            
            }else{

               finalDoJogo(somaCartasJogador,somaCartasComputador)
            }
       
       }else{

         if(somaCartasComputador>21){
            
            window.alert("Usuário Cartas: "+cartasJogador[0]+naipesJogador[0]+" "+cartasJogador[1]+naipesJogador[1]+" "+cartasJogador[2]+naipesJogador[2]+" - pontuação:"+somaCartasJogador+
            "\n"+"Computador Cartas: "+cartasComputador[0]+naipesComputador[0]+cartasComputador[1]+naipesComputador[1]+" - pontuação:"+somaCartasComputador+
            "\n"+"Usuário Ganhou")
         
         }else if(somaCartasComputador<somaCartasJogador){
            window.alert("Usuário Cartas: "+cartasJogador[0]+naipesJogador[0]+" "+cartasJogador[1]+naipesJogador[1]+" "+cartasJogador[2]+naipesJogador[2]+" - pontuação:"+somaCartasJogador+
            "\n"+"Computador Cartas: "+cartasComputador[0]+naipesComputador[0]+cartasComputador[1]+naipesComputador[1]+" - pontuação:"+somaCartasComputador+
            "\n"+"Usuário Ganhou")
         }else{
            window.alert("Usuário Cartas: "+cartasJogador[0]+naipesJogador[0]+" "+cartasJogador[1]+naipesJogador[1]+" "+cartasJogador[2]+naipesJogador[2]+" - pontuação:"+somaCartasJogador+
           "\n"+"Computador Cartas: "+cartasComputador[0]+naipesComputador[0]+cartasComputador[1]+naipesComputador[1]+" - pontuação:"+somaCartasComputador+
           "\n"+"Computador Ganhou")
         }
         
       }

      }
      }else{
         
            if(somaCartasComputador>21){
            
               window.alert("Usuário Cartas: "+cartasJogador[0]+naipesJogador[0]+" "+cartasJogador[1]+naipesJogador[1]+" - pontuação:"+somaCartasJogador+
               "\n"+"Computador Cartas: "+cartasComputador[0]+naipesComputador[0]+cartasComputador[1]+naipesComputador[1]+" - pontuação:"+somaCartasComputador+
               "\n"+"Usuário Ganhou")
            
            }else if(somaCartasComputador<somaCartasJogador){

               cartasComputador.push(sorteioCarta(cartas),sorteioCarta(cartas))
               naipesComputador.push(sorteioNaipe(naipes),sorteioNaipe(naipes))

                if(somaCartasComputador>21){
            
                  window.alert("Usuário Cartas: "+cartasJogador[0]+naipesJogador[0]+" "+cartasJogador[1]+naipesJogador[1]+" - pontuação:"+somaCartasJogador+
                  "\n"+"Computador Cartas: "+cartasComputador[0]+naipesComputador[0]+" "+cartasComputador[1]+naipesComputador[1]+" "+cartasComputador[2]+naipesComputador[2]+" - pontuação:"+somaCartasComputador+
                  "\n"+"Usuário Ganhou")
            
                }else if(somaCartasComputador<somaCartasJogador){

                  cartasComputador.push(sorteioCarta(cartas),sorteioCarta(cartas))
                  naipesComputador.push(sorteioNaipe(naipes),sorteioNaipe(naipes))
                }else{
                  window.alert("Usuário Cartas: "+cartasJogador[0]+naipesJogador[0]+" "+cartasJogador[1]+naipesJogador[1]+" - pontuação:"+somaCartasJogador+
                  "\n"+"Computador Cartas: "+cartasComputador[0]+naipesComputador[0]+cartasComputador[1]+naipesComputador[1]+" - pontuação:"+somaCartasComputador+
                  "\n"+"Usuário Ganhou")
                }

            
            }else{
               window.alert("Usuário Cartas: "+cartasJogador[0]+naipesJogador[0]+" "+cartasJogador[1]+naipesJogador[1]+" - pontuação:"+somaCartasJogador+
              "\n"+"Computador Cartas: "+cartasComputador[0]+naipesComputador[0]+cartasComputador[1]+naipesComputador[1]+" - pontuação:"+somaCartasComputador+
              "\n"+"Computador Ganhou")
            }
         
            
      }
   


   //caso jogador desita de jogar
}else{
   window.alert('Fim do Jogo')
}

