import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import SelectTripsNames from "../../Constants/TripsListName";
import Url_Base from "../../Constants/Url";
import { Body } from "../../Styled";
import { BodyEnrollTrip, BoxEnrollTrip, HeaderEnrollTrip, InputDescrip, SelecEnrollTrip, SelectSize } from "./ApplicationFormLayout";


const AplicationFormPage = () => {
  const allTrips= SelectTripsNames()
  const [idTrip, setIdTrip] = useState("")
  const [form, setForm] = useState({ name: "", age: "", applicationText: "", profession: "", country: "" })
  
console.log("lista",allTrips[0].props.value)

  const creatEnroll = (event) => {
    console.log(form)
    event.preventDefault()
    const body = form;
    axios.post(Url_Base + `/trips/${idTrip}/apply`, body)
      .then((res) => {
        alert("Inscrição concluida")
      })
      .catch((er) => {
        console.log("erro: ", er.response)
      })
  }
  const onChangeInputs = (ev) => {
    const name = ev.target.name
    const value = ev.target.value
    setForm({ ...form, [name]: value })
  }

  const onChangeId = (ev) => {
    setIdTrip(ev.target.value);
  };

  return (
    <Body>
      <HeaderEnrollTrip>
        <button><Link to="/trips/list">Voltar</Link></button>
      </HeaderEnrollTrip>
      <BodyEnrollTrip>
        <SelecEnrollTrip>
          <div>Inscrever-se</div>
          <SelectSize name="Viagem" onChange={onChangeId}>
            {SelectTripsNames()}
          </SelectSize>
        </SelecEnrollTrip>
        <form onSubmit={creatEnroll}>
          <BoxEnrollTrip>
            <InputDescrip
              name="name"
              value={form.name}
              placeholder={"Nome"}
              id="name"
              onChange={onChangeInputs}
              required
            />
            <InputDescrip
              name="age"
              value={form.age}
              placeholder={"Idade"}
              id="age" type="number"
              onChange={onChangeInputs}
              required
            />
            <InputDescrip
              name="applicationText"
              value={form.applicationText}
              placeholder={"Texto"}
              id="description"
              onChange={onChangeInputs}
              minlength="10"
              required
            />
            <InputDescrip
              name="profession"
              value={form.profession}
              placeholder={"Profissão"}
              id="profession"
              onChange={onChangeInputs}
              required
            />
            <InputDescrip
              name="country"
              value={form.country}
              placeholder={"País de origem"}
              id="country"
              onChange={onChangeInputs}
              required
            />
          </BoxEnrollTrip>
          <button>Inscrever-se</button>
        </form>
      </BodyEnrollTrip>

    </Body>
  );
}
export default AplicationFormPage;