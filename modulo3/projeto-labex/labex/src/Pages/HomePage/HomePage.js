import { Link } from "react-router-dom"
import { BodyHome, BodyText, BoxTravelHome, ButtonHead, ButtonTravel, CardTravelHome, HomeHeader, ImgLogo } from "./HomeLayout";
import RocketLogo from '../../Img/logo-rocket.png'
import { Body } from "../../Styled";

const HomePage=()=> {
  
    return (
      <Body>
      <HomeHeader>
        <ImgLogo src={RocketLogo} alt="Logo" />
        <ButtonHead><Link to="/admin/trips/list">Admin</Link></ButtonHead>
      </HomeHeader>
<BodyHome>
<BodyText>
  <h1>Canditate-se para viagens intergalaticas</h1>
  <h3>De viagens pela NASA até foguetes Russos Clandestinos</h3>
  <ButtonTravel><Link to="/trips/list">Viagens</Link></ButtonTravel>
</BodyText>
<div>
  <CardTravelHome>
    <BoxTravelHome>Viagem Disponivel</BoxTravelHome>
    <BoxTravelHome>Viagem Disponivel</BoxTravelHome>
    <BoxTravelHome>Viagem Disponivel</BoxTravelHome>
  </CardTravelHome>
</div>
</BodyHome>


      </Body>
    );
  }
  
  export default HomePage;