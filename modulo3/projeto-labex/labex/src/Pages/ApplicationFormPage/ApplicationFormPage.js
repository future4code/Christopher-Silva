import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRequestData } from "../../Hooks/useRequestData";
import { Body } from "../../Styled";
import { BodyEnrollTrip, BoxEnrollTrip, HeaderEnrollTrip, SelecEnrollTrip } from "./ApplicationFormLayout";
const token = localStorage.getItem('token')

const AplicationFormPage = () => {
  const allTrips = useRequestData()
  const [name,setName]=useState("")
  const [age,setAge]=useState("")
  const [applicationText,setApplicationText]=useState("")
  const [profession,setProfession]=useState("")
  const [country,setCountry]=useState("")
  const [idTrip,setIdTrip]=useState("")

  const creatEnroll = () => {
    const body = {
      name: name,
      age: age,
      applicationText: applicationText,
      profession: profession,
      country: country,

    };
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/christopher-silva-carver/trips/${idTrip}/apply`, body)
      .then((res) => {
        console.log("certo ", res.data)
        
      })
      .catch((er) => {
        console.log("erro: ", er.response)
      })
  }

  const onChangeName = (ev) => {
    setName(ev.target.value);
  };
  const onChangeAge = (ev) => {
    setAge(ev.target.value);
  };
  const onChangeApplicationText = (ev) => {
    setApplicationText(ev.target.value);
  };
  const onChangeProfession = (ev) => {
    setProfession(ev.target.value);
  };
  const onChangeCountry = (ev) => {
    setCountry(ev.target.value);
  };
  const onChangeId = (ev) => {
    setIdTrip(ev.target.value);
  };



  const tripsListNames = allTrips.map((trip, index) => {
    return <option key={index} value={trip.id}>{trip.name} </option>
  })
  return (
    <Body>
      <HeaderEnrollTrip>
        <button><Link to="/trips/list">Voltar</Link></button>
      </HeaderEnrollTrip>
      <BodyEnrollTrip>
        <SelecEnrollTrip>
          <div>Inscrever-se</div>
          <select name="ordenação" onChange={onChangeId}>
            {tripsListNames}
          </select>
        </SelecEnrollTrip>
        <BoxEnrollTrip>
          
          <input placeholder={"Nome"} onChange={onChangeName}/>
          <input placeholder={"Idade"} onChange={onChangeAge}/>
          <input placeholder={"Texto"} onChange={onChangeApplicationText}/>
          <input placeholder={"Profissão"} onChange={onChangeProfession}/>
          <input placeholder={"País de origem"} onChange={onChangeCountry}/>
          
        </BoxEnrollTrip>
        <button onClick={creatEnroll}>Inscrever-se</button>
      </BodyEnrollTrip>
      
    </Body>
  );
}

export default AplicationFormPage;