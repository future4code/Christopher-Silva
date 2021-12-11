import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import SelectTripsNames from "../../Constants/TripsListName";
import Url_Base from "../../Constants/Url";
import { Body } from "../../Styled";
import { BoxEnroll, EnrollBody, HeaderEnroll, SelectTravel } from "./AdminEnrollLayout";

const CreateTripPage = () => {
  const [idTrip, setIdTrip] = useState("")
  const token = localStorage.getItem('token')
  const [tripDetail, setTripDetails] = useState("")
  const [bodyApprove, setBodyApprove] = useState("")
  
  
  const onChangeId = (ev) => {
    setIdTrip(ev.target.value);
  };

  const getTripDet = () => {
    axios.get(Url_Base + `/trip/${idTrip}`, {
      headers: {
        auth: token
      }
    }
    )
      .then((res) => {
        console.log("certo do getTrip ", res.data.trip.candidates)
        setTripDetails(res.data.trip)
      })
      .catch((er) => {
        console.log("erro do getTrip", er.response)
      })
  }
  const approveYes = (enrollId) => {
    console.log("pegaID na função approv", enrollId)
    setBodyApprove(true)
    putEnroll(enrollId)
  }
  const approveNot = (enrollId) => {
    setBodyApprove(false)
    putEnroll(enrollId)
  }
  const putEnroll = (enrollId) => {
    console.log("estado do bodyApprove", bodyApprove)
    const body = {
      approve: bodyApprove
    }
    console.log("id transferido para função put", enrollId)
    axios.put(Url_Base + `/trips/${idTrip}/candidates/${enrollId}/decide`, body, {
      headers: {
        auth: token
      }
    }
    )
      .then((res) => {
        console.log("certo ", res.data)
      })
      .catch((er) => {
        console.log("erro: do putEnroll ", er.response)
      })
  }

  const tripListDetail = () => {
    return <div>
      <div>Dados da Viagem</div>
      <div>Nome: {tripDetail.name}</div>
      <div>Planeta: {tripDetail.planet}</div>
      <div>Descrição: {tripDetail.description}</div>
      <div>Duração: {tripDetail.durationInDays}</div>
      <div>Data: {tripDetail.date}</div>
    </div>
  }

  const approvedList = tripDetail && tripDetail.approved.map((approved, index) => {
    return <li>{approved.name}</li>
  })

  const enrollList = tripDetail && tripDetail.candidates.map((enroll, index) => {
    return <BoxEnroll key={index}>
      <div>Nome:{enroll.name} </div>
      <div>Idade:{enroll.age} </div>
      <div>Texto:{enroll.applicationText} </div>
      <div>País:{enroll.country} </div>
      <div>Profissão:{enroll.profession} </div>
      <div><button onClick={() => approveYes(enroll.id)} >Aprovar</button><button onClick={() => approveNot(enroll.id)}>Reprovar</button></div>
    </BoxEnroll>
  })

  console.log("detalhes das trips", tripDetail)

  useEffect(() => {
    getTripDet()
  }, [idTrip])
  return (
    <Body>
      <HeaderEnroll>
        <SelectTravel>
          <div>Viagens</div>
          <select name="ordenação" onChange={onChangeId} >
            {SelectTripsNames()}
          </select>
        </SelectTravel>
        <button><Link to="/admin/trips/list">Voltar</Link></button>
      </HeaderEnroll>
      <EnrollBody>
        <div>
          <BoxEnroll>
            {tripListDetail()}
          </BoxEnroll>
          <div>Aprovados</div>
          <ul> {approvedList} </ul>
        </div>
        <div>
          {enrollList}
        </div>
      </EnrollBody>
    </Body>
  );
}
export default CreateTripPage;