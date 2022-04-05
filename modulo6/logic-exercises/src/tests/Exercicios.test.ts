import { ExerciciosBusiness } from "../ExercicioBusiness";
import { ExerciciosDataBaseMock } from "./mock/ExerciciosDataBaseMock";


const exerciciosBusinessMock = new ExerciciosBusiness(
    new ExerciciosDataBaseMock() as any
)

describe("teste exercício 1", () => {
    
    test("Erro que deve retornar quando falta um valor na sequencia de numeros do array", () => {
        try {
            const result =  exerciciosBusinessMock.ex1("falta numero")
            console.log("result",result)
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual("falta o número 7")
            }
        } finally {
            expect.assertions(1)
        }
    })

    test("Certo que deve retornar quando não falta nenhum numero na sequencia do array", () => {
        try {
            const result =  exerciciosBusinessMock.ex1("não falta numero")
            console.log("result",result)
             expect(result).toEqual("Nenhum número faltante")
        } catch (e) {
            if (e instanceof Error) { 
            }
        } finally {
            expect.assertions(1)
        }
    })
})