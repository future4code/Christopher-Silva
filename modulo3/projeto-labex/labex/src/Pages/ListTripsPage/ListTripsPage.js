import { Link } from "react-router-dom";
import { Body } from "../../Styled";
import { ButtonsHeadrTrip, CardTrip, HeaderTrips, TripsList } from "./ListTripsLayout";
import RocketLogo from '../../Img/logo-rocket.png'
import { ImgLogo } from "../HomePage/HomeLayout";
import { useRequestData } from "../../Hooks/useRequestData";

const ListTripPage = () => {
  const allTrips = useRequestData()

  const tripsList = allTrips.map((trip, index) => {

    return <CardTrip key={index}>
      <div>Nome do evento:{trip.name}</div>
       <div>Descrição:{trip.description}</div>
       <div>planeta: {trip.planet}</div>
       <div>Duração:{trip.durationInDays} dias</div> 
       <div>Data da viagem:{trip.date}</div>
       </CardTrip>
  })

  return (
    <Body>
      <HeaderTrips>
      <ImgLogo src={RocketLogo} alt="Logo" />
        <ButtonsHeadrTrip>
          <button><Link to="/">Home</Link></button>
          <button><Link to="/trips/application">Inscrever-se</Link></button>
        </ButtonsHeadrTrip>
      </HeaderTrips>

      <TripsList>
        
        <div>
          {tripsList}
          
        </div>
      </TripsList>
    </Body>
  );
}

export default ListTripPage;