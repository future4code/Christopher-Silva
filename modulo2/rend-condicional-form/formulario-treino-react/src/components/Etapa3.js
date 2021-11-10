import React from "react"
import styled from "styled-components";

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding-bottom:10px;
`
export default class Etapa3 extends React.Component {
    render() {
        return (
            <Container>
                <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
                <p>5. Porque você não terminou o curso de graduação?</p>
                <input />
                <p>6. Você fez algum curso complementar?</p>
                <select>
                    <option value="Nenhum">Nenhum</option>
                    <option value="Curso Técnico">Curso Técnico</option>
                    <option value="Curso de Inglês">Curso de Inglês</option>
                </select>
            </Container>
        )
    }
}