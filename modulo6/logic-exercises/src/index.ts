import ExercicioBusiness from "./ExercicioBusiness";

// Exercício do dia 1 - Número Faltante
 console.log("Exercicio 1 -  Array com número faltante na sequencia, resposta: ", ExercicioBusiness.ex1([1,2,3,4,5,6,8])) 
 console.log("Exercicio 1 - Array sem número faltante na sequencia, resposta: ", ExercicioBusiness.ex1([1,2,3,4,5,6,7,8]))
 console.log("Exercicio 1 - simulando banco de dados, faltando número na sequencia ", ExercicioBusiness.ex1BD("falta numero")) 
 console.log("Exercicio 1 - simulando banco de dados, sem faltar número na sequencia ", ExercicioBusiness.ex1BD("Não falta numero")) 

 // Exercício do dia 2 - indexOf
 console.log("Exercicio 2 -  Index onde aparece o caracter solicitado pela primera vez, resposta: ", ExercicioBusiness.indexOf("cavaleiro", "o"))
 console.log("Exercicio 2 -  retorno quando não encontra o caracter na palavra: ", ExercicioBusiness.indexOf("cavaleiro", "p"))

  