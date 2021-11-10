import React from "react"
import styled from "styled-components";

const Container= styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding-bottom:10px;
`

export default class Etapa1 extends React.Component {



    render() {
       
        return (
            <Container>
               <h3>ETAPA 1 DADOS GERAIS</h3>
<p>1.Qual o seu nome?</p>
<input/>
<p>2.Qual sua idade?</p>
<input/>
<p>3.Qual seu email?</p>
<input/>
<p>4.Qual a sua escolaridade?</p>
<select onChange={this.props.mudaPagina}>
    <option value="médio">Ensino médio incompleto</option>
    <option value="médio">Ensino médio completo</option>
    <option value="superior">Ensino superior incompleto</option>
    <option value="superior">Ensino superior completo</option>
</select>
            </Container>
        )
    }
}

