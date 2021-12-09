import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { useRequestData } from "../../Hooks/useRequestData";
import { Body } from "../../Styled";
import { AdminBody, AdminBoxBody, HeaderAdmin } from "./AdminHomeLayout";

const AdminHomePage = () => {
  const [name, setName] = useState("");
  const [planet, setPlanet] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [durationInDays, setDurationInDais] = useState("");
  const token = localStorage.getItem('token')
  const allTrips = useRequestData()

  const delTrip = (id) => {
    console.log("pega id",id)
axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/christopher-silva-carver/trips/${id}`, {
      headers: {
        auth:token
      }
    })
      .then((res) => {
       console.log("ok",res.data)
      })
      .catch((err) => {
        console.log("erre",err.data)
      })
  }
  const tripsListNames = allTrips.map((trip, index) => {
    return <li key={index}>{trip.name} {trip.id}<button onClick={() =>delTrip(trip.id)}>X</button></li>
  })

  const onChangeName = (ev) => {
    setName(ev.target.value);
  };
  const onChangePlanet = (ev) => {
    setPlanet(ev.target.value);
  };
  const onChangeDate = (ev) => {
    setDate(ev.target.value);
  };
  const onChangeDescription = (ev) => {
    setDescription(ev.target.value);
  };
  const onChangeDurationInDais = (ev) => {
    setDurationInDais(ev.target.value);
  };

  const navigate = useNavigate();
 
    if (token === null) 
      navigate("/")
    

  const CleanLocalStorage = () => {
    localStorage.setItem('token', "")
    console.log(localStorage.getItem('token'))
    navigate("/")
  }


  const creatTrip = () => {
    const body = {
      name: name,
      planet: planet,
      date: date,
      description: description,
      durationInDays: durationInDays
    };
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/christopher-silva-carver/trips', body, {
      headers: {
        auth: token
      }
    }
    )
      .then((res) => {
        console.log("certo ", res.data)
        
      })
      .catch((er) => {
        console.log("erro: ", er.response)
      })
  }

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
          <input
            placeholder={"Nome"}
            type='nome'
            value={name}
            onChange={onChangeName}
          />
          <select name="planeta" onChange={onChangePlanet} >
            <option value="planeta1">Planeta1</option>
            <option value="planeta2" >Planeta2</option>
            <option value="planeta3">Planeta3</option>
          </select>
          <input
            placeholder="Data" onChange={onChangeDate} type="date" name="date" required="" min="" value={date}></input>
          <input
            placeholder={"Descrição"}
            type='descrição'
            value={description}
            onChange={onChangeDescription}
          />
          <input
            placeholder={"Duração(dias)"}
            type='duração'
            value={durationInDays}
            onChange={onChangeDurationInDais}
          />
          <button onClick={creatTrip}>Criar</button>
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