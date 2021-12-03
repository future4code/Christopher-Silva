import styled from "styled-components"

export const PostContainer = styled.div `
    border: 1px solid gray;
    width: 300px;
    margin-bottom: 10px;
`
export const CardMatchs = styled.div`
color:black;
`
export const HeaderCard = styled.div`
width: 450px;
height:40px;
margin-bottom: 10px;
color:black;
display:grid;
grid-template-columns: 1fr 1fr 1fr;
`
export const BotãoTela = styled.div`

`
export const ImgLogo = styled.img`
height:45px;
`

export const CorPart = styled.div`
display: flex;
justify-content: flex-end
`

export const ListaBP=styled.div`
display:flex;
flex-direction:column;
gap:10px;
`
export const PerfilBP=styled.div`
display:flex;
align-items: center;
gap:10px;
margin-left:20px;
`
export const ImgbotChat=styled.img`
max-height:60px;
max-width:50px;
border-radius:20px;
margin-left:10px;
:hover {
      opacity: 0.8;
      cursor: pointer;
    }
`
export const ImgChat=styled.img`
display:flex;
justify-content: center;
align-items:center;
max-height:100%;
max-width:100%;
overflow: hidden;
:hover {
      opacity: 0.8;
      cursor: pointer;
    }
`
export const ImgCirculo=styled.div`
display:flex;
align-items:center;
justify-content: center;
height:60px;
width:60px;
border-radius:50px;
overflow: hidden;
.redondo {
   width: 200px;
   height: 200px;
   background-color: #000;
   color: #FFF;
}
`