import React from 'react';
import styled from 'styled-components'

function CardGrande(props) {
    
    const BigContainer = styled.div`
     display: flex;
    align-items: center;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    background-color: #e5e5e5;
    `
    
    const MeuNome=styled.h4`
    margin-bottom: 15px;
    `
    const BigCardContainerInterno=styled.div`
     display: flex;
    flex-direction: column;
    justify-items: flex-start;
    `
    const EdicaoImagem=styled.img`
     width: 70px;
    margin-right: 10px;
    border-radius: 50%;
    `
    return (
        <BigContainer>
            <EdicaoImagem src={ props.imagem } />
            <BigCardContainerInterno>
                <MeuNome>{ props.nome }</MeuNome>
                <p>{ props.descricao }</p>
            </BigCardContainerInterno>
        </BigContainer>
    )
}

export default CardGrande;