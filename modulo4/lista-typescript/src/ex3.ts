enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}
function organizaFilme(nomeFilme:string, anoFilme:number, generoFilme:string,pontos?:number){

type Filmes = {
    nome:string,
    anoLancamento:number,
    genero:string,
}

type Pontos = { 
        pontos:number
}

if (pontos){
   type FilmesInfo = Filmes | Pontos 
   const filme:FilmesInfo={
    nome:nomeFilme,
    anoLancamento:anoFilme,
    genero:generoFilme,
    pontos:pontos
}
return filme
}else{
    type FilmesInfo = Filmes
    const filme:FilmesInfo={
        nome:nomeFilme,
        anoLancamento:anoFilme,
        genero:generoFilme,
    }
    return filme
}

}

console.log(organizaFilme("Duna", 2021, GENERO.ACAO))