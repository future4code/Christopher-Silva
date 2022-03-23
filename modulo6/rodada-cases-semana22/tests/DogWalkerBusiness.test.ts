import { IdGeneratorMock } from "./mocks/idGeneratorMock"
import { DogWalkerBusiness } from "../src/business/DogWalkerBusiness"
import { DogWalkerDatabase } from "../src/data/DogWalkerDatabase"
import { Calculate } from "../src/services/calculate"
import { CustomError } from "../src/errors/CustomError"

const dogWalkerBusinessMock = new DogWalkerBusiness(
    new IdGeneratorMock(),
    new DogWalkerDatabase() as any,
    new Calculate()
)

describe("teste de creat", () => {
    
    test("Erro que deve retornar quando um ou mais valores estão vazios", async () => {
        try {
            await dogWalkerBusinessMock.creat("2023/03/30", 30, "", "Norte", 2, "16:00", "16:30")
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual("Preencha todos os dados corretamente")
            }
        } finally {
            expect.assertions(1)
        }
    })


    test("Erro que deve retornar quando ano é anterior ao atual", async () => {
        try {
            await dogWalkerBusinessMock.creat("2021/03/30", 30, "Sul", "Norte", 2, "16:00", "16:30")
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual("Ano não pode ser anterior ao atual")
            }
        } finally {
            expect.assertions(1)
        }
    })


    test("Erro que deve retornar quando mês é anterior ao atual", async () => {

        try {
            await dogWalkerBusinessMock.creat("2022-02-22", 30, "Sul", "Norte", 2, "16:00", "16:30")
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual("Mês não pode ser anterior ao atual")
            }
        } finally {
            expect.assertions(1)
        }
    })

    test("Erro que deve retornar quando mês é anterior ao atual", async () => {

        try {
            await dogWalkerBusinessMock.creat("2022-03-22", 30, "Sul", "Norte", 2, "16:00", "16:30")
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual("Dia não pode ser anterior ao atual")
            }
        } finally {
            expect.assertions(1)
        }
    })

    test("Erro que deve retornar quando horário é diferente da duração", async () => {

        try {
            await dogWalkerBusinessMock.creat("2023-03-22", 30, "Sul", "Norte", 2, "16:00", "16:31")
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual("Tempo entre inicio e fim não pode ser diferente que 30 minutos")
            }
        } finally {
            expect.assertions(1)
        }
    })

    test("Certo quando todos parametros estão corretos", async () => {

        try {
         const result =   await dogWalkerBusinessMock.creat("2023-03-22", 30, "Sul", "Norte", 2, "16:00", "16:30") 
        expect(result).toEqual("Passeio cadastrado")
        } catch (e) {
            
        } finally {
            expect.assertions(1)
        }
    })



})

/*
describe("teste de login", () =>{
    // Teste 1: Erro que deve retornar quando o email fornecido não existe 
    test("Erro que deve retornar quando o email fornecido não existe", async()=>{
        expect.assertions
        try{
            await userBusinessMock.login("flavio@email.com", "email")
        }catch(e:any){
            expect(e.message).toEqual("Invalid credentials")
            expect(e.statusCode).toBe(401)
        }
    })
    // Teste 2: Erro que deve retornar quando a senha está errada
    test("Erro que deve retornar quando a senha está errada", async()=>{
        expect.assertions
        try{
            await userBusinessMock.login("astrodev@gmail.com", "senhaErrada")
        }catch(e:any){
            expect(e.message).toEqual("Invalid credentials")
            expect(e.statusCode).toBe(401)
        }
    })
    // Teste 3: Sucesso no login e verificação do token de acesso 
    test("Sucesso no login e verificação do token de acesso", async()=>{
        expect.assertions
        try{
            const result = await userBusinessMock.login("astrodev@gmail.com", "astrodev123")
            expect(result).toEqual({"accessToken": "token_mockado"})
        }catch(e:any){
            console.log(e)
        }
    })
})
*/