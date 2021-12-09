import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRequestData } from "../../Hooks/useRequestData";
import { Body } from "../../Styled";
import { BoxEnroll, EnrollBody, HeaderEnroll, SelectTravel } from "./AdminEnrollLayout";

const CreateTripPage = () => {
  const allTrips = useRequestData()
  const [idTrip,setIdTrip]=useState("")
  const token = localStorage.getItem('token')
  const onChangeId = (ev) => {
    setIdTrip(ev.target.value);
    getTrip()
  };

  const getTrip = () => {
    
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/christopher-silva-carver/trip/${idTrip}`, {
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

  const tripsListNames = allTrips.map((trip, index) => {
    return <option key={index} value={trip.id}>{trip.name} </option>
  })
  return (
    <Body>
      <HeaderEnroll>
        <SelectTravel>
          <div>Viagens</div>
          <select name="ordenação" onChange={onChangeId} >
            {tripsListNames}
          </select>
        </SelectTravel>
        <button><Link to="/admin/trips/list">Voltar</Link></button>
      </HeaderEnroll>

      <EnrollBody>
        <div>
          <BoxEnroll>
            <div>Dados Viagem</div>
          </BoxEnroll>
          <div>Aprovados</div>
        </div>
        <div>
        <BoxEnroll>
          <div>Candidatos</div>
          <div>Box Candidato</div>
        </BoxEnroll>
        <BoxEnroll>
          <div>Candidatos</div>
          <div>Box Candidato</div>
        </BoxEnroll>
        <BoxEnroll>
          <div>Candidatos</div>
          <div>Box Candidato</div>
        </BoxEnroll>
        </div>
      </EnrollBody>

    </Body>
  );
}

export default CreateTripPage;