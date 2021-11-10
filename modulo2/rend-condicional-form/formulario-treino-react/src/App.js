import React from "react"
import Etapa1 from "./components/Etapa1"
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";
import styled from "styled-components";

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`


export default class App extends React.Component {

    state = {
        etapa:1

    }


    

    mudaPagina = () => {
        let etapaAtual = this.state.etapa
        if (etapaAtual === 1) {
            switch (this.props.state.valor) {
                case "médio":
                    this.setState({
                      etapa: 4
                    })
                    break;
                case "superior":
                    this.setState({
                        etapa: 2
                    })
                    break;
                default:
            }
        } else if (etapaAtual === 2) {
            this.setState({
                etapa: 3
            })
        } else if (etapaAtual === 3) {
            this.setState({
                etapa: 4
            })
        }
    }
    render() {
    
        let paginaEscolhida;
        switch (this.state.etapa) {
            case 1:

                paginaEscolhida = <Etapa1 />
                break;
            case 2:
                paginaEscolhida = <Etapa2 />
                break;
            case 3:
                paginaEscolhida = <Etapa3 />
                break;
            case 4:
                paginaEscolhida = <Final />
                break;
            default:
        }

        return (

            <Container>
                {paginaEscolhida}
                <button onChange={this.mostrarOpcaoDoSelect} onClick={this.mudaPagina}> Próxima etapa</button>
            </Container>
        );
    }
}
