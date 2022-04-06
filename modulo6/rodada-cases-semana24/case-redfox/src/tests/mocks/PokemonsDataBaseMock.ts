import { pokemonsListEmptMock, pokemonsListMock } from "./PokemonsListMock"

export class PokemonsDataBaseMock{

    public async getAllPokemons(status: string): Promise<void|any> {

        if(status === "pokemonsList"){
            return pokemonsListMock
        }else if(status === "pokemonsListEmpt"){
            return pokemonsListEmptMock
        }else{
            undefined
        }
    }

    public async getPokemonsByPage(page:Number, pokemonsForPage:Number): Promise<void|any> {

        if(page === 10){
            return pokemonsListEmptMock
        }else if(page === 1){
            return pokemonsListMock
        }else{
            undefined
        }
    }

    public async gePokemonById(status:String): Promise<void|any> {

        if(status === "pokemonsList"){
            return pokemonsListMock
        }else if(status === "pokemonsListEmpt"){
            return pokemonsListEmptMock
        }else{
            undefined
        }
    }

    public async getPokemonSearch(status:String): Promise<void|any> {

        if(status === "pokemonsList"){
            return pokemonsListMock
        }else if(status === "pokemonsListEmpt"){
            return pokemonsListEmptMock
        }else{
            undefined
        }
    }

}