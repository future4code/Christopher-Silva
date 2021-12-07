import { Link } from "react-router-dom";
import { Body } from "../../Styled";
import { ButtonsHeadrTrip, CardTrip, FiltersTrips, HeaderTrips, TripsList } from "./ListTripsLayout";
import RocketLogo from '../../Img/logo-rocket.png'
import { ImgLogo } from "../HomePage/HomeLayout";

const ListTripPage = () => {

  return (
    <Body>
      <HeaderTrips>
      <ImgLogo src={RocketLogo} alt="Logo" />
        <ButtonsHeadrTrip>
          <button><Link to="/home">Home</Link></button>
          <button><Link to="/trips/application">Inscrever-se</Link></button>
        </ButtonsHeadrTrip>
      </HeaderTrips>

      <FiltersTrips>
        <input placeholder={"Nome/Planeta"} />
        <div>
          <div>Duração (dias)</div>
          <div>
            <input placeholder={"Min"} />
            <input placeholder={"Max"} />
          </div>
        </div>
        <div>
          <div>Data</div>
          <div>
            <input placeholder={"Min"} />
            <input placeholder={"Max"} />
          </div>
        </div>
      </FiltersTrips>

      <TripsList>
        <select name="ordenação">
          <option value="Crescente">Crescente</option>
          <option value="Decrescente" >Decrescente</option>
        </select>
        <div>
          <CardTrip>Viagens Disponiveis</CardTrip>
          <CardTrip>Viagens Disponiveis</CardTrip>
        </div>
      </TripsList>
    </Body>
  );
}

export default ListTripPage;