import styled from "styled-components"

export const HeaderCard = styled.div`
width: 450px;
height:40px;
margin-bottom: 10px;
color:black;
display:grid;
grid-template-columns: 1fr 1fr 1fr;
`
export const CardDarMatches = styled.div`
display:flex;
flex-direction:column;
align-items: center;
color:black;
height:505px;
justify-content: space-between;
`
export const CardIcones = styled.div`
margin-top:15px;
display:flex;
justify-content: space-between;
justify-content: space-evenly;
gap:60px;
`
export const Desc = styled.div`
display:flex;
width:400px;
margin-left:220px;
font-family:"Goudy Bookletter 1911", sans-serif;;
`

export const CardPerfil= styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:90%;
height:600px;
justify-content: space-between;
`
export const Imgbot=styled.img`
width:50px;
height:50px;
border-radius:20px;
margin-left:10px;
:hover {
      opacity: 0.8;
      cursor: pointer;
      -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3);
    }
`
export const ImgbotCor=styled.img`
width:50px;
height:50px;
border-radius:10px;
margin-left:10px;
:hover {
      opacity: 0.8;
      cursor: pointer;
    }
`
export const ImgPerfil = styled.div`
height:300px;
width:300px;
display:flex;
align-items:center;
justify-content: center
`
export const ImgP=styled.img`
max-height:300px;
max-width:300px;
border-radius:10px;
filter: drop-shadow(
-1px -2px 15px #000000
)
`
export const TextoBio = styled.div`
font-size:15px
`
export const Carreg = styled.div`
display:grid;
place-items:center;
height:400px;
`


