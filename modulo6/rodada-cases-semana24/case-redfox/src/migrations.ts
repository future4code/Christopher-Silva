import knex from 'knex';
import dotenv from 'dotenv';

let tableName: string = "pokemon_go_api"

dotenv.config();

export const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE_NAME,
          port: 3306,
          multipleStatements: true,
    },
});

export const createTables = async (): Promise<boolean> => {
    try {
        await connection
            .raw(`
            CREATE TABLE IF NOT EXISTS ${tableName}(
                id  BIGINT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                pokedex_number BIGINT,
                img_name VARCHAR(255),
                generation VARCHAR(255),
                evolution_stage VARCHAR(255),
                evolved VARCHAR(255),
                family_id VARCHAR(255),
               cross_gen BIGINT,
               type_1 VARCHAR(255),
               type_2 VARCHAR(255),
               weather_1 VARCHAR(255),
               weather_2 VARCHAR(255),
               stat_total BIGINT,
               atk BIGINT,
               def BIGINT,
               sta BIGINT,
               legendary BIGINT,
               aquireable BIGINT,
               spawns BIGINT,
               regional BIGINT,
               raidable BIGINT,
               hatchable BIGINT,
               shyni BIGINT,
              nest BIGINT,
              new BIGINT,
              not_gettable BIGINT,
              future_evolve BIGINT
                );
           `);

        console.log("Tabela criada com sucesso!");
        //closeConnection()
        populatTables()
        return true;
    } catch (e) {
        const error = e as Error;
        console.log(error);
        return false;
    }
};

let allPokemon: any = []
let pokemonsData = require('./migrationDataBase/pokemonsData.json');

pokemonsData.forEach((pokemon: any) => {
    const eachPokemon = {
        id:pokemon.id,
        name: pokemon.name,
        pokedex_number: pokemon.pokedex_number,
        img_name: pokemon.img_name,
        generation: pokemon.generation,
        evolution_stage: pokemon.evolution_stage,
        evolved: pokemon.evolved,
        family_id: pokemon.family_id,
        cross_gen: pokemon.cross_gen,
        type_1: pokemon.type_1,
        type_2: pokemon.type_2,
        weather_1: pokemon.weather_1,
        weather_2: pokemon.weather_2,
        stat_total: pokemon.stat_total,
        atk: pokemon.atk,
        def: pokemon.def,
        sta: pokemon.sta,
        legendary: pokemon.legendary,
        aquireable: pokemon.aquireable,
        spawns: pokemon.spawns,
        regional: pokemon.regional,
        raidable: pokemon.raidable,
        hatchable: pokemon.hatchable,
        shyni: pokemon.shyni,
        nest: pokemon.nest,
        new: pokemon.new,
        not_gettable: pokemon.not_gettable,
        future_evolve: pokemon.future_evolve
    }
        
    allPokemon.push(eachPokemon)
})

const populatTables = async (): Promise<boolean> => {
    try {
        
        await connection(tableName).insert(allPokemon);

        console.log("Tabela populada com sucesso!");
        closeConnection()
        return true;
    } catch (e) {
        const error = e as Error;
        console.log(error);
        return false;
    }
};

const closeConnection = () => { connection.destroy(); };


createTables()