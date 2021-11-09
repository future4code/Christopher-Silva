import React from "react"
import styled from "styled-components";

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding-bottom:10px;
`
export default class Etapa2 extends React.Component {
    render() {
        return (
            <Container>
<h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
                <p>5. Qual curso?</p>
                <input />
                <p>6. Qual unidade de Ensino?</p>
                <input />
            </Container>
        )
    }
}