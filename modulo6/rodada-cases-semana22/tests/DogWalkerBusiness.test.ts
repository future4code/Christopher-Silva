import { IdGeneratorMock } from "./mocks/idGeneratorMock"
import { DogWalkerBusiness } from "../src/business/DogWalkerBusiness"
import { Calculate } from "../src/services/calculate"
import { DogWalkerDataBaseMock } from "./mocks/DogWalkerDataBaseMock"

const dogWalkerBusinessMock = new DogWalkerBusiness(
    new IdGeneratorMock(),
    new DogWalkerDataBaseMock() as any,
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


describe("teste de show", () => {
    
    test("Erro que deve retornar quando id está vazio", async () => {
        try {
            await dogWalkerBusinessMock.show("")
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual("Preencha todos os dados corretamente")
            }
        } finally {
            expect.assertions(1)
        }
    })

  
    test("Erro que deve retornar quando id for invalido", async () => {
        try {
            await dogWalkerBusinessMock.show("id_invalido")
           
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual("Passeio não encontrado")
            }
        } finally {
            expect.assertions(1)
        }
    })


    test("Erro quando status PENDENTE", async () => {

        try {
         const result = await dogWalkerBusinessMock.show("status_pendente");
         console.log("resultado",result)
         
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual("Passeio ainda não realizado")
            }
        } finally {
            expect.assertions(1)
        }
    })

    test("Erro quando status PASSEANDO", async () => {

        try {
         const result = await dogWalkerBusinessMock.show("status_passeando");
         console.log("resultado",result)
         
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual("Passeio ainda não finalizado")
            }
        } finally {
            expect.assertions(1)
        }
    })

    test("Certo quando todos parametros estão corretos", async () => {

        try {
         const result =   await dogWalkerBusinessMock.show("id_valido") 
        expect(result).toEqual("Tempo real de passeio: 30 minutos")
        } catch (e) {
            
        } finally {
            expect.assertions(1)
        }
    })
 


})



describe("teste de startWalk", () => {
    
    test("Erro que deve retornar quando um ou mais valores estão vazios", async () => {
        try {
            await dogWalkerBusinessMock.startWalk("id_valido","")
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual("Preencha todos os dados corretamente")
            }
        } finally {
            expect.assertions(1)
        }
    })

    test("Erro que deve retornar quando passeio ja tiver sido finalizado", async () => {
        try {
            await dogWalkerBusinessMock.startWalk("id_finalizado","16:00")
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual("Não é possivel editar, passeio já finalizado")
            }
        } finally {
            expect.assertions(1)
        }
    })

    test("Erro que deve retornar quando passeio ja tiver sido iniciado", async () => {
        try {
            await dogWalkerBusinessMock.startWalk("id_iniciado","16:00")
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual("Não é possivel editar, passeio já iniciado")
            }
        } finally {
            expect.assertions(1)
        }
    })
    test("Erro que deve retornar quando id for invalido", async () => {
        try {
            await dogWalkerBusinessMock.startWalk("id_invalido","16:00")
           
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual("Passeio não encontrado")
            }
        } finally {
            expect.assertions(1)
        }
    })

    test("Certo quando todos parametros estão corretos", async () => {

        try {
         const result =   await dogWalkerBusinessMock.startWalk("id_start_valido", "16:00") 
        expect(result).toEqual("Passeio iniciado")
        } catch (e) {
            
        } finally {
            expect.assertions(1)
        }
    })

})



describe("teste de finishWalk", () => {
    
    test("Erro que deve retornar quando um ou mais valores estão vazios", async () => {
        try {
            await dogWalkerBusinessMock.finishWalk("id_valido","")
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual("Preencha todos os dados corretamente")
            }
        } finally {
            expect.assertions(1)
        }
    })
   

    test("Erro que deve retornar quando passeio ja tiver sido finalizado", async () => {
        try {
            await dogWalkerBusinessMock.finishWalk("id_finalizado","16:00")
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual("Não é possivel editar, passeio já finalizado")
            }
        } finally {
            expect.assertions(1)
        }
    })
 
    test("Erro que deve retornar quando passeio ainda não tiver sido iniciado", async () => {
        try {
            await dogWalkerBusinessMock.finishWalk("id_pendente","16:00")
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual("Não é possivel editar, passeio ainda não iniciado")
            }
        } finally {
            expect.assertions(1)
        }
    })
  
    test("Erro que deve retornar quando id for invalido", async () => {
        try {
            await dogWalkerBusinessMock.finishWalk("id_invalido","16:00")
           
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual("Passeio não encontrado")
            }
        } finally {
            expect.assertions(1)
        }
    })

    test("Erro que deve retornar quando hora final for menor que inicial", async () => {
        try {
            await dogWalkerBusinessMock.finishWalk("status_passeando","15:00")
           
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual("Horário final não pode ser anterior ou igual ao inicial")
            }
        } finally {
            expect.assertions(1)
        }
    })

    test("Erro que deve retornar quando hora for igual, mas minuto final for menor ou igual que inicial", async () => {
        try {
            await dogWalkerBusinessMock.finishWalk("status_passeando","16:05")
           
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual("Horário final não pode ser anterior ou igual ao inicial")
            }
        } finally {
            expect.assertions(1)
        }
    })
  
    test("Certo quando todos parametros estão corretos", async () => {
        try {
         const result =   await dogWalkerBusinessMock.finishWalk("status_passeando", "16:30") 
        
        expect(result).toEqual("Passeio finalizado")
        } catch (e) {

        } finally {
            expect.assertions(1)
        }
    })
    

})


describe("teste de walks", () => {
    
    test("Erro que deve retornar quando for enviado paginação e número da página for zero", async () => {
        try {
            await dogWalkerBusinessMock.walks(0, 2)
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual("Número da página não pode ser 0")
            }
        } finally {
            expect.assertions(1)
        }
    })

    test("Erro que deve retornar quando for enviado quantidade de itens por pagina e número da página for vaziu", async () => {
        try {
            await dogWalkerBusinessMock.walks("", 2)
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual("Preencha ambos os dados para paginação")
            }
        } finally {
            expect.assertions(1)
        }
    })

    test("Erro que deve retornar quando for enviado numero de pagina e itens por página for vaziu", async () => {
        try {
            await dogWalkerBusinessMock.walks(1, "")
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual("Preencha ambos os dados para paginação")
            }
        } finally {
            expect.assertions(1)
        }
    })

    test("Certo quando todos parametros são enviados", async () => {
        try {
         const result =   await dogWalkerBusinessMock.walks(1, 1) 
        
        expect(result).toEqual(`{id: "idMokado",
            date: "datemokado",
            price: 60,
            duration: "durationMokado",
            latitude: "latitudeMokado",
            longitude: "longitudeMokado",
            numer_of_pets: 1,
            start_time: "starMokado",
            end_time: "endMokado",
            status: "statusMokado",
            start_walk: "startMokado",
            finish_walk: "finishMokado"
        }`)
        } catch (e) {

        } finally {
            expect.assertions(1)
        }
    })

    test("Certo quando nenhum parametro e enviado", async () => {
        try {
         const result =   await dogWalkerBusinessMock.walks(null,null) 
        
        expect(result).toEqual(`{id: "idMokado",
            date: "datemokado",
            price: 60,
            duration: "durationMokado",
            latitude: "latitudeMokado",
            longitude: "longitudeMokado",
            numer_of_pets: 1,
            start_time: "starMokado",
            end_time: "endMokado",
            status: "statusMokado",
            start_walk: "startMokado",
            finish_walk: "finishMokado"
        }`)
        } catch (e) {

        } finally {
            expect.assertions(1)
        }
    })

})