import React from "react"
import styled from "styled-components";

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding-bottom:10px;
`
export default class Final extends React.Component {
    render() {
        return (
            <Container>
                <h3>O FORMULÁRIO ACABOU</h3>
                <p>Muito obrigado por participar! Entraremos em contato!</p>
            </Container>
        )
    }
}