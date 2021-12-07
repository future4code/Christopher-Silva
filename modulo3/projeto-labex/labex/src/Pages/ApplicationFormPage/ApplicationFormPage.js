import { Link } from "react-router-dom";
import { Body } from "../../Styled";
import { BodyEnrollTrip, BoxEnrollTrip, HeaderEnrollTrip, SelecEnrollTrip } from "./ApplicationFormLayout";

const AplicationFormPage = () => {

  return (
    <Body>
      <HeaderEnrollTrip>
        <button><Link to="/trips/list">Voltar</Link></button>
      </HeaderEnrollTrip>
      <BodyEnrollTrip>
        <SelecEnrollTrip>
          <div>Inscrever-se</div>
          <select name="ordenação">
            <option value="Crescente">Planeta1</option>
            <option value="Decrescente" >Planeta2</option>
          </select>
        </SelecEnrollTrip>
        <BoxEnrollTrip>
          
          <input placeholder={"Nome"} />
          <input placeholder={"Idade"} />
          <input placeholder={"Texto"} />
          <input placeholder={"Profissão"} />
          <input placeholder={"País de origem"} />
          
        </BoxEnrollTrip>
        <button>Inscrever-se</button>
      </BodyEnrollTrip>
      
    </Body>
  );
}

export default AplicationFormPage;