import { Link, useNavigate } from "react-router-dom"
import { BodyHome, BodyText, BoxTravelHome, ButtonTravel, CardTravelHome, HomeHeader, ImgLogo } from "./HomeLayout";
import RocketLogo from '../../Img/logo-rocket.png'
import { Body } from "../../Styled";
import axios from "axios";
import React, { useState } from "react";
import Url_Base from "../../Constants/Url";

const HomePage = () => {
  const navigate = useNavigate();
  const [optionLogin, setOptionLogin] = useState("Deslogado");
  const [form, setForm] = useState({ email: "", password: "" })


  const onChangeInputs = (ev) => {
    const name = ev.target.name
    const value = ev.target.value
    setForm({ ...form, [name]: value })
  }

  const loginIn = () => {
    if (localStorage.getItem('token')) {
      navigate("/admin/trips/list")
    } else { setOptionLogin("Logado") }
  }
  const onSubmitLogin = (event) => {
    event.preventDefault()
    console.log("login realizado")
    const body = form;

    axios.post(Url_Base + `/login`, body)
      .then((res) => {
        console.log("certo ", res.data)
        localStorage.setItem('token', res.data.token)
        navigate("/admin/trips/list")
      })
      .catch((er) => {
        console.log("erro: ", er.response)
        alert("E-mail ou senha incorretos, tente novamente")
      })
  }

  const login = () => {
    if (optionLogin === "Deslogado") {
      return <button onClick={loginIn}>Admin</button>
    } else if (optionLogin === "Logado") {
      return <form onSubmit={onSubmitLogin}>
        <input
          name="email"
          placeholder='E-mail'
          type='email'
          value={form.email}
          onChange={onChangeInputs}
          required
        />
        <input
          name="password"
          placeholder='Password'
          type='password'
          value={form.password}
          onChange={onChangeInputs}
          minlength="6"
          maxlength="6"
          required
        />
        <button >Enviar</button>
      </form>
    }
  }
  return (
    <Body>
      <HomeHeader>
        <ImgLogo src={RocketLogo} alt="Logo" />
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