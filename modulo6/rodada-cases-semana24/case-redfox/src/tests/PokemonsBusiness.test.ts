import { PokemonsBusiness } from "../business/PokemonsBusiness";
import { PokemonsDataBaseMock } from "./mocks/PokemonsDataBaseMock";
import { pokemonsListMock } from "./mocks/PokemonsListMock";


const pokemonsBusinessMock = new PokemonsBusiness(
    new PokemonsDataBaseMock() as any,
)


describe("teste de all", () => {

    test("Erro que deve retornar quando lista de pokemons vier vazia", async () => {

        try {
            await pokemonsBusinessMock.all("pokemonsListEmpt")
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual("Erro ao retornar lista de pokemons")
            }
        } finally {
            expect.assertions(1)
        }
    })
    
    test("Certo deve retornar quando vier lista de pokemons", async () => {
        try {
            const result = await pokemonsBusinessMock.all("pokemonsList")
            expect(result).toEqual(pokemonsListMock)
        } catch (e) {
            if (e instanceof Error) {

            }
        } finally {
            expect.assertions(1)
        }
    })
})


describe("teste de page", () => {

    test("Erro que deve retornar quando valor enviado for zero", async () => {

        try {
            await pokemonsBusinessMock.page(0,1)
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual("Preencha todos os dados corretamente, valor enviado não pode ser 0 nem número negativo")
            }
        } finally {
            expect.assertions(1)
        }
    })

    test("Erro que deve retornar quando valor enviado for negativo", async () => {

        try {
            await pokemonsBusinessMock.page(1,-2)
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual("Preencha todos os dados corretamente, valor enviado não pode ser 0 nem número negativo")
            }
        } finally {
            expect.assertions(1)
        }
    })

    test("Erro que deve retornar quando vier lista de pokemons por página", async () => {

        try {
            const empt = 0
            await pokemonsBusinessMock.page("",-2)
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual("Preencha todos os dados corretamente, valor enviado não pode ser 0 nem número negativo")
            }
        } finally {
            expect.assertions(1)
        }
    })

    test("Erro que deve retornar quando página vier vázia", async () => {

        try {
            const empt = 0
            await pokemonsBusinessMock.page(10,2)
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual("Nenhum pokemon nesta página")
            }
        } finally {
            expect.assertions(1)
        }
    })
    
    
    test("Certo deve retornar quando resposta for correta", async () => {
        try {
            const result = await pokemonsBusinessMock.page(1,2)
            expect(result).toEqual(pokemonsListMock)
        } catch (e) {
            if (e instanceof Error) {

            }
        } finally {
            expect.assertions(1)
        }
    })
    
})


describe("teste de byId", () => {

    test("Erro que deve retornar quando valor enviado vaziu ou inexistente", async () => {

        try {
            await pokemonsBusinessMock.byId("")
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual("Preencha o id corretamente")
            }
        } finally {
            expect.assertions(1)
        }
    })

    test("Erro que deve retornar quando lista de pokemons vier vazia", async () => {

        try {
            await pokemonsBusinessMock.byId("pokemonsListEmpt")
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual("Nenhum pokemon encontrado")
            }
        } finally {
            expect.assertions(1)
        }
    })

    test("Certo que deve retornar quando vier o pokemon selecionado pelo id", async () => {
        try {
            const result = await pokemonsBusinessMock.byId("pokemonsList")
            expect(result).toEqual(pokemonsListMock)
        } catch (e) {
            if (e instanceof Error) {

            }
        } finally {
            expect.assertions(1)
        }
    })
})


describe("teste de search", () => {

    test("Erro que deve retornar quando a busca vier vázia", async () => {

        try {
            await pokemonsBusinessMock.search("pokemonsListEmpt")
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual("Nenhum pokemon encontrado")
            }
        } finally {
            expect.assertions(1)
        }
    })

    test("Erro que deve retornar quando valor enviado for vázio", async () => {

        try {
            await pokemonsBusinessMock.search("")
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual("Parametro de busca não enviado")
            }
        } finally {
            expect.assertions(1)
        }
    })

    test("Certo que deve retornar quando busca trouxer pokemons", async () => {
        try {
            const result = await pokemonsBusinessMock.search("pokemonsList")
            expect(result).toEqual(pokemonsListMock)
        } catch (e) {
            if (e instanceof Error) {

            }
        } finally {
            expect.assertions(1)
        }
    })
})