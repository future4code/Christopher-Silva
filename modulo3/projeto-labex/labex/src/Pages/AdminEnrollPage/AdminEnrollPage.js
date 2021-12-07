import { Link } from "react-router-dom";
import { Body } from "../../Styled";
import { BoxEnroll, EnrollBody, HeaderEnroll, SelectTravel } from "./AdminEnrollLayout";

const CreateTripPage = () => {

  return (
    <Body>
      <HeaderEnroll>
        <SelectTravel>
          <div>Viagens</div>
          <select name="Viagem">
            <option value="Viagem1">Viagem1</option>
            <option value="Viagem2" >Viagem12</option>
            <option value="Viagem3">Viagem13</option>
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