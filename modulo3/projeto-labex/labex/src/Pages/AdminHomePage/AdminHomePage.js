import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import PlanetsList from "../../Constants/Planets";
import Url_Base from "../../Constants/Url";
import { useRequestData } from "../../Hooks/useRequestData";
import { Body } from "../../Styled";
import { InputDescrip, SelectSize } from "../ApplicationFormPage/ApplicationFormLayout";
import { AdminBody, AdminBoxBody, FormInputCard, HeaderAdmin, LiSize } from "./AdminHomeLayout";

const AdminHomePage = () => {
  
  const token = localStorage.getItem('token')
  const allTrips = useRequestData()
  const [form,setForm]=useState({name:"",planet:"",date:"",description:"",durationInDays:""})

  const delTrip = (id) => {
    axios.delete(Url_Base + `/trips/${id}`, {
      headers: {
        auth: token
      }
    })
      .then((res) => {
        window.location.reload()
      })
      .catch((err) => {
      })
  }
  const tripsListNames = allTrips.map((trip, index) => {
    return <LiSize key={index}>{trip.name}<button onClick={() => delTrip(trip.id)}>X</button></LiSize>
  })

  const onChangeInputs = (ev) => {
    const name = ev.target.name
    const value = ev.target.value
    setForm({ ...form, [name]: value })
  }

  const navigate = useNavigate();

  if (token === null)
    navigate("/")

  const CleanLocalStorage = () => {
    localStorage.setItem('token', "")
    navigate("/")
  }

  const creatTrip = (event) => {
    event.preventDefault()
    const body = form;
    axios.post(Url_Base + `/trips`, body, {
      headers: {
        auth: token
      }
    }
    )
      .then((res) => {
        alert("Viagem criada com sucesso")
        window.location.reload()
      })
      .catch((er) => {
        console.log("erro: ", er.response)
      })
  }

  useEffect(() => {
    
  }, [allTrips])

  return (
    <Body>
      <HeaderAdmin>
        <div>
          Painel Administrativo
        </div>
        <button><Link to="/admin/trips/:id">Inscritos</Link></button>
        <div>
          <button onClick={CleanLocalStorage}>Logout</button>
          <button><Link to="/">Home</Link></button>
        </div>
      </HeaderAdmin>
      <AdminBody>
        <AdminBoxBody>
          <h2>Criar Viagem</h2>
          <FormInputCard onSubmit={creatTrip}>
            <InputDescrip
              placeholder={"Nome"}
              type='nome'
              name="name"
              value={form.name}
              onChange={onChangeInputs}
              required
            />
            <SelectSize name="planet" value={form.planet} onChange={onChangeInputs} >
              {PlanetsList}
            </SelectSize>
            <InputDescrip
              placeholder="Data" onChange={onChangeInputs} type="date" value={form.date} name="date" required="" min="" ></InputDescrip>
            <InputDescrip
              placeholder={"Descrição"}
              name="description"
              value={form.description}
              onChange={onChangeInputs}
              required
            />
            <InputDescrip
              placeholder={"Duração(dias)"}
              type='number'
              name="durationInDays"
              value={form.durationInDays}
              onChange={onChangeInputs}
              required
            />
            <div><button>Criar</button></div>
          </FormInputCard >
        </AdminBoxBody>
        <AdminBoxBody>
          <h2>Viagens Disponiveis</h2>
          {tripsListNames}
        </AdminBoxBody>
      </AdminBody>
    </Body>
  );
}

export default AdminHomePage;