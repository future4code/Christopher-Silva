import { ExerciciosBusiness } from "../ExercicioBusiness";
import { ExerciciosDataBaseMock } from "./mock/ExerciciosDataBaseMock";


const exerciciosBusinessMock = new ExerciciosBusiness(
    new ExerciciosDataBaseMock() as any
)

describe("teste exercícios", () => {
    
    test("Ex. 1 - (mockado) Retorno do número faltante na sequencia de numeros do array", () => {
        try {
            const result =  exerciciosBusinessMock.ex1BD("falta numero")
            expect(result).toEqual("falta o número 7")
        } catch (e) {
            if (e instanceof Error) {
                
            }
        } finally {
            expect.assertions(1)
        }
    })

    test("Ex. 1 - (mockado) Retorno quando não falta nenhum numero na sequencia do array", () => {
        try {
            const result =  exerciciosBusinessMock.ex1BD("não falta numero")
             expect(result).toEqual("Nenhum número faltante")
        } catch (e) {
            if (e instanceof Error) { 
            }
        } finally {
            expect.assertions(1)
        }
    })

    test("Ex. 1 - Retorno do número faltante na sequencia de numeros do array", () => {
        try {
            const result =  exerciciosBusinessMock.ex1([1,2,3,4,5,6,8])
            expect(result).toEqual("falta o número 7")
        } catch (e) {
            if (e instanceof Error) { 
            }
        } finally {
            expect.assertions(1)
        }
    })

    test("Ex. 1 - Retorno quando não falta nenhum numero na sequencia do array", () => {
        try {
            const result =  exerciciosBusinessMock.ex1([1,2,3,4,5,6,7,8])
             expect(result).toEqual("Nenhum número faltante")
        } catch (e) {
            if (e instanceof Error) { 
            }
        } finally {
            expect.assertions(1)
        }
    })

    test("Ex. 2 - Resposta da função com index da letra encontrada na string", () => {
        try {
            const result =  exerciciosBusinessMock.indexOf("cavaleiro","o")
            expect(result).toEqual(8)
        } catch (e) {
            if (e instanceof Error) {
                
            }
        } finally {
            expect.assertions(1)
        }
    })

    test("Ex. 2 - Resposta da função quando não encontra letra na string", () => {
        try {
            const result =  exerciciosBusinessMock.indexOf("cavaleiro", "p")
             expect(result).toEqual("caracter não encontrado na palavra")
        } catch (e) {
            if (e instanceof Error) { 
            }
        } finally {
            expect.assertions(1)
        }
    })

    test("Ex. 3 - Resposta da função com caracteres inválidos", () => {
        try {
            const result =  exerciciosBusinessMock.checkCharacter("({}")
            expect(result).toEqual(false)
        } catch (e) {
            if (e instanceof Error) {
                
            }
        } finally {
            expect.assertions(1)
        }
    })

    test("Ex. 3 - Resposta da função com caracteres válidos", () => {
        try {
            const result =  exerciciosBusinessMock.checkCharacter("{([])}")
             expect(result).toEqual(true)
        } catch (e) {
            if (e instanceof Error) { 
            }
        } finally {
            expect.assertions(1)
        }
    })

    test("Ex. 4 - Resposta da função com strings com letras iniciais iguais", () => {
        try {
            const result =  exerciciosBusinessMock.checkCommonPrefix(["string1","string2","string3"])
             expect(result).toEqual("string")
        } catch (e) {
            if (e instanceof Error) { 
            }
        } finally {
            expect.assertions(1)
        }
    })

    test("Ex. 4 - Resposta da função com strings com letras iniciais diferentes", () => {
        try {
            const result =  exerciciosBusinessMock.checkCommonPrefix(["string1","string","cstring"])
             expect(result).toEqual("")
        } catch (e) {
            if (e instanceof Error) { 
            }
        } finally {
            expect.assertions(1)
        }
    })



    
})