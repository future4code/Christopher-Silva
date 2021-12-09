import { Link, useNavigate } from "react-router-dom"
import { BodyHome, BodyText, BoxTravelHome, ButtonTravel, CardTravelHome, HomeHeader, ImgLogo } from "./HomeLayout";
import RocketLogo from '../../Img/logo-rocket.png'
import { Body } from "../../Styled";
import axios from "axios";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [optionLogin,setOptionLogin] = useState("Deslogado");

  const onChangeEmail = (ev) => {
    setEmail(ev.target.value);
  };
  const onChangePassword = (ev) => {
    setPassword(ev.target.value)
  };
  const loginIn=()=>{
    if(localStorage.getItem('token')){
      navigate("/admin/trips/list")
    }else{setOptionLogin("Logado")}
  }
  const onSubmitLogin = () => {
    const body = {
      email: email,
      password: password
    };

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/christopher-silva-carver/login', body)
      .then((res) => {
        console.log("certo ",res.data)
        localStorage.setItem('token',res.data.token)
        navigate("/admin/trips/list")
      })
      .catch((er) => {
        console.log("erro: ",er.response)
        console.log(email,password)
      })
  }

  const login=()=>{
    if(optionLogin==="Deslogado"){
      return<button onClick={loginIn}>Admin</button>
    }else if(optionLogin==="Logado"){
      return<div>
      <input
        placeholder='E-mail'
        type='email'
        value={email}
        onChange={onChangeEmail}
      />
      <input
        placeholder='Password'
        type='password'
        value={password}
        onChange={onChangePassword}
      />
      <button onClick={onSubmitLogin}>Enviar</button>

    </div>
    }
  }

  return (
    <Body>
      <HomeHeader>
        <ImgLogo src={RocketLogo} alt="Logo" />
        {/* <ButtonHead><Link to="/admin/trips/list">Admin</Link></ButtonHead> */}
        <div>
          {login()}

        </div>
      </HomeHeader>
      <BodyHome>
        <BodyText>
          <h1>Canditate-se para viagens intergalaticas</h1>
          <h3>De viagens pela NASA até foguetes Russos Clandestinos</h3>
          <ButtonTravel><Link to="/trips/list">Viagens</Link></ButtonTravel>
        </BodyText>
        <div>
          <CardTravelHome>
            <BoxTravelHome>Viagem Disponivel</BoxTravelHome>
            <BoxTravelHome>Viagem Disponivel</BoxTravelHome>
            <BoxTravelHome>Viagem Disponivel</BoxTravelHome>
          </CardTravelHome>
        </div>
      </BodyHome>


    </Body>
  );
}

export default HomePage;