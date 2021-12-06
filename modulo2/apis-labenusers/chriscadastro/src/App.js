import React from 'react';
import TelaCadastro from './components/TelaCadastro';
import TelaListaUsuarios from './components/TelaListaUsuarios';


export default class App extends React.Component {
  state={
    telaAtual:"cadastro"
  }

  trocaTela = ()=>{
    switch(this.state.telaAtual){
      case "cadastro":
        return  <TelaCadastro irTelaLista={this.irTelaLista}/>
        case "lista":
          return <TelaListaUsuarios irTelaCadastro={this.irTelaCadastro}/>
          default:
            <div>Erro! Página não encontrada</div>
    }
  }

  irTelaCadastro =()=>{
    this.setState({telaAtual:"cadastro"})
  }

  irTelaLista =()=>{
    this.setState({telaAtual:"lista"})
  }
  
  render(){
  return (
    <div>
     {this.trocaTela()}
      
    </div>
  );
  }
}


