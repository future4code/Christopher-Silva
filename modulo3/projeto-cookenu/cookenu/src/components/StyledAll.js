import styled from "styled-components";
import notebooksheet from "../assets/notebook-sheet.png"

export const ButtonAll=styled.button`
background-color:rgba(240, 240, 240, 0.6);
border-radius:15px;
font-size:25px;
margin:15px;
font-family: cursive;
color:#ff6a28;
border:0px;
:hover {
  color: green;
};
:active {
color: #ff8000;
}
`

export const BackColorSite=styled.div`
background-color:#f0f0f0;
width: 100%;
min-height: 100vh;
display:flex;
justify-content: center;
align-items: center;
`
export const CardBoxAll =styled.div`
border: 1px Solid black;
width:30vw;
min-height:80vh;
border-radius:20px;
background-image: url(${notebooksheet});
background-position: center center;
background-size:cover;
display:flex;
flex-direction:column;
align-items: center;
`

export const Texth1=styled.h1`
   font-family: cursive; 
`

export const Text=styled.div`
font-family: cursive;
`

export const InputAll=styled.input`
font-size:25px;
border-radius:5px;

`
