import React from 'react';
import styled from 'styled-components'

function ImagemButton(props) {
    const EdicaoImagem = styled.img`
width: 30px;
    margin-right: 10px;
`
    const ConteinerBotoes = styled.div`
  display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
`

    return (
        <ConteinerBotoes>
            <EdicaoImagem src={props.imagem} />
            <p>{props.texto}</p>
        </ConteinerBotoes>

    )
}

export default ImagemButton;