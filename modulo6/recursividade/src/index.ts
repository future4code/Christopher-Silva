import dotenv from "dotenv";
import { AddressInfo } from "net";
import express from "express";

dotenv.config();
const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});
//Ex. 1
// a. Receba um número e imprima todos os inteiros de 0 até esse número no console em ordem crescente

const printNumbersCres = (n: number) => {
  if (n >= 0) {
    printNumbersCres(n - 1);
    console.log(n);
  }
};
//printNumbersCres(4)

//b. Receba um número e imprima todos os inteiros desse número até 0 em ordem decrescente
const printNumbersDec = (n: number) => {
  if (n >= 0) {
    console.log(n);
    printNumbersDec(n - 1);
  }
};
//printNumbersDec(4)

//Ex. 2
//Escreva uma função recursiva que calcule a soma dos números inteiros de 0 a n
export const calculateSumTo = (n: number, acc: number = 0): number => {
  if (n === 0) {
    return acc;
  }
  return calculateSumTo(n - 1, acc + n);
};

//console.log(calculateSumTo(3));
//console.log(calculateSumTo(10));

//Ex.3
//Transforme a função desenvolvida no Exercício 2 em iterativa (ou seja, não use recursividade).
export const calculateSumToInt = (n: number): number => {
  var sum = 0
	for (var i = 0 ; i <= n ; i++) {
        sum += i;
  }
	return sum;
};
	
// Exemplos de uso:
//console.log(calculateSumToInt(3));
//console.log(calculateSumToInt(10));

//Ex. 4
//Escreva uma função recursiva que consiga imprimir todos os elementos de um array

export const printArray = (arr: number[], i: number = arr.length - 1) => {
  if (i >= 0) {
    printArray(arr, i - 1);
    console.log(`Elemento ${i}: `, arr[i]);
  }
};

const array = [1, 2, 3, 4, 6];
printArray(array);

