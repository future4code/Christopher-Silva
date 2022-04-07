<h1 align="center" id="top">Case 3 - Projeto Pokemon Go (API): <img src="http://www.modomeu.com/wp-content/uploads/2012/08/pokemon-modomeu-e1343926427243.png" width="100"></h1>

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
 <br />
 <h2 id="sobre"> Sobre </h2>


<br />
- Pokemon Go (API) para consumo do banco de dados referente aos pokemons

- Desafio Pokemon Go (API) é o case 3 do bootcamp da LABENU. 

<br />

 <h2 id="documentacao"> Documentação API: </h2>


<table>
  <tr>

   Acesse o postman aqui 👉 [ <img src="https://c.tenor.com/rbx3ph5SLRUAAAAj/pikachu-pokemon.gif" width="70" align="center"> ](https://documenter.getpostman.com/view/18385085/UVyvuuDy)

       
</table>
 
 <h2 id="heroku"> Deploy (Heroku): </h2>

 https://pokemongo-api.herokuapp.com/

<br />

 <h2 id="desenvolvedor"> Desenvolvedor 🤖 </h2>


<table>
  <tr>
  <td align="center"><a href="https://github.com/ChristpherFeilstrecker">
   <sub><h2>Christopher Feilstrecker da Silva</h2> </sub> 
       
</table>
<br />

 <h2 id="tecnologias"> Tecnologias utilizadas: 🖥️ </h2>


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

<h2 id="funcionalidades"> Funcionalidades: </h2>


<br />

* Retorna todos pokemons;
* Retorna lista de pokemons por página e quantidade;
* Retorna lista de pokemons por nome ou tipo;
* Retorna o pokemon pelo id;

<br />

 <h2 id="testes"> Testes:


<br />

## teste de all (busca lista com todos pokemons)
    √ Erro que deve retornar quando lista de pokemons vier vazia 
    √ Certo deve retornar quando vier lista de pokemons 
## teste de page (busca pokemons por páginação)
    √ Erro que deve retornar quando valor enviado for zero 
    √ Erro que deve retornar quando valor enviado for negativo 
    √ Erro que deve retornar quando vier lista de pokemons por página 
    √ Erro que deve retornar quando página vier vázia 
    √ Certo deve retornar quando resposta for correta 
##  teste de byId (busca pokemon por id)
    √ Erro que deve retornar quando valor enviado vaziu ou inexistente
    √ Erro que deve retornar quando lista de pokemons vier vazia 
    √ Certo que deve retornar quando vier o pokemon selecionado pelo id 
##  teste de search (busca pokemons por nome ou tipo)
    √ Erro que deve retornar quando a busca vier vázia 
    √ Erro que deve retornar quando valor enviado for vázio 
    √ Certo que deve retornar quando busca trouxer pokemons 

<br />

 <h2 id="comousar"> Como usar </h2>

<br />
Teste o código pelo postman seguindo a documentação <a href="#documentacao">AQUI</a> ou pelo seu computador assim:
- Clone o código para seu computador.
-  Junto dos arquivos clonados crie outro arquivo com nome .env (para acessar seu banco de dados).
  
   Ex.: 
   
        DB_USER = seu_usuario
  
        DB_PASSWORD = sua_senha
  
        DB_HOST = seu_host
  
        DB_PORT = sua_posrt
  
        DB_DATABASE_NAME = nome_database
  
- Dentro da pasta clonada, execute no terminal os comandos:

->  ```npm install``` (para instalar as dependencias).

->  ```npm migrations``` (para criar a polular tabela).

->  ```npm run test``` (para rodar os tests dos enpoints).

-> ```npm run dev```  ou ```npm run start``` (para rodar o servidor e utilizar os endpoints).

- Utilize o arquivo request.rest para testar as funcionalidades ou pelo postman trocando o link pelo seu localhost mantendo os endpoints, seguindo  documentação do postman <a href="#documentacao">AQUI</a>.
- Exemplo:

de: https://pokemongo-api.herokuapp.com/pokemons/all

para: http://localhost:3003/dogwalker/pokemons/all

 <br />
 <br />

<div align="center"><a href="#top">Voltar para o topo</a></div>