import React from 'react';
import styled from 'styled-components'

function CardPequeno(prop) {
const PropImagem = styled.img`
  width: 30px;
    margin-right: 10px;
`
const ConteinerPequeno=styled.div`
display: flex;
align-items: center;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
height: 80px;
width:550px;
`

return (
    <ConteinerPequeno className="pequenocard-container">
        <PropImagem src={prop.logo}/>
        <h4>{prop.tipo}</h4>
        <p>{prop.descricao}</p>
    </ConteinerPequeno>
  )
}
export default CardPequeno;