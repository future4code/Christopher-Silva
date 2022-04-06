<h1 align="center" id="top">Case 3 - Projeto Pokemon Go (API): <img src="https://www.pngplay.com/wp-content/uploads/11/Pikachu-Pokemon-Transparent-File.png" width="50"></h1>

<p align="center">
  <a href="#sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#documentacao">Documentação</a> &#xa0; | &#xa0;
  <a href="#heroku">Deploy</a> &#xa0; | &#xa0;
  <a href="#desenvolvedor">Desenvolvedor</a> | &#xa0;
<a href="#tecnologias">Tecnologias</a> &#xa0; | &#xa0;
<a href="#funcionalidades">Funcionalidades</a> &#xa0; | &#xa0;
<a href="#testes">Testes</a> &#xa0; | &#xa0;
<a href="#comousar">Como Testar esta API</a>

</p>

## <h2 id="sobre"> Sobre </h2>


<br />
- Pokemon Go (API) para consumo do banco de dados referente aos pokemons

- Desafio Pokemon Go (API) é o case 3 do bootcamp da LABENU. 

<br />

## <h2 id="documentacao"> Documentação API: </h2>


<table>
  <tr>

  ## Acesse o postman aqui 👉 [ <img src="https://c.tenor.com/rbx3ph5SLRUAAAAj/pikachu-pokemon.gif" width="70" align="center"> ](https://documenter.getpostman.com/view/18385085/UVyvuuDy)

       
</table>
 
## <h2 id="heroku"> Deploy (Heroku): </h2>

 https://pokemongo-api.herokuapp.com/

<br />

## <h2 id="desenvolvedor"> Desenvolvedor 🤖 </h2>


<table>
  <tr>
  <td align="center"><a href="https://github.com/ChristpherFeilstrecker">
   <sub><h2>Christopher Feilstrecker da Silva</h2> </sub> 
       
</table>
<br />

## <h2 id="tecnologias"> Tecnologias utilizadas: 🖥️ </h2>


<br />

- Typescript
- Node
- SQL
- MySQL
- Express
- Cors
- Dotenv
- Knex
- React
- Axios
- UUID
- Bcrypt
- Hash
- json
- jest

<br />

## <h2 id="funcionalidades"> Funcionalidades: </h2>


<br />

* Retorna todos pokemons;
* Retorna lista de pokemons por página e quantidade;
* Retorna lista de pokemons por nome ou tipo;
* Retorna o pokemon pelo id;

<br />

## <h2 id="testes"> Testes:


<br />

## teste de all (busca lista com todos pokemons)
    √ Erro que deve retornar quando lista de pokemons vier vazia (11 ms)
    √ Certo deve retornar quando vier lista de pokemons (2 ms)
## teste de page (busca pokemons por páginação)
    √ Erro que deve retornar quando valor enviado for zero (3 ms)
    √ Erro que deve retornar quando valor enviado for negativo (2 ms)
    √ Erro que deve retornar quando vier lista de pokemons por página (3 ms)
    √ Erro que deve retornar quando página vier vázia (2 ms)
    √ Certo deve retornar quando resposta for correta (2 ms)
##  teste de byId (busca pokemon por id)
    √ Erro que deve retornar quando valor enviado vaziu ou inexistente (2 ms)
    √ Erro que deve retornar quando lista de pokemons vier vazia (3 ms)
    √ Certo que deve retornar quando vier o pokemon selecionado pelo id (3 ms)
##  teste de search (busca pokemons por nome ou tipo)
    √ Erro que deve retornar quando a busca vier vázia (3 ms)
    √ Erro que deve retornar quando valor enviado for vázio (2 ms)
    √ Certo que deve retornar quando busca trouxer pokemons (2 ms)

<br />

## <h2 id="comousar"> Como usar </h2>

<br />

Banco dados populado, deve ser consumido pelo postman seguindo a documentação <a href="#documentacao">AQUI</a> 

<a href="#top">Voltar para o topo</a> 