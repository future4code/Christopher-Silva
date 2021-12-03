import axios from "axios";
import { CardMatchs, CorPart, HeaderCard, ImgbotChat, ImgChat, ImgCirculo, ImgLogo, ListaBP, PerfilBP } from "./styledSeusMatches";
import Logomarca from "../../img/match.png"
import { useState, useEffect } from "react";
import LupaCor from "../../img/lupa-coracao.jpg"
import Partido from "../../img/partido.png"

const SeusMatches = (props) => {
    const limpaMatch = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Christopher/clear')
            .then((res) => {
                pegaPerfisQueDeramMatch()
            })
            .catch((err) => {
            })
    }

    const [perfisDeramMatch, setPerfisDeramMatch] = useState([])

    const pegaPerfisQueDeramMatch = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Christopher/matches')
            .then((res) => {
                setPerfisDeramMatch(res.data.matches)
            })
            .catch((err) => {
            })
    }

    const listaBatepapo = perfisDeramMatch.map((perfil) => {
        return <PerfilBP key={perfil.id}>
            <ImgCirculo>
            <ImgChat src={perfil.photo} alt={perfil.name} />
            </ImgCirculo>
            <div>{perfil.name}</div>
        </PerfilBP>
    })
    useEffect(() => {
        pegaPerfisQueDeramMatch();
    });
    return <CardMatchs>
        <HeaderCard>
            <ImgbotChat src={LupaCor} onClick={() => { props.darMatches() }} />
            <ImgLogo src={Logomarca} alt="logomarca" />
            <CorPart>
                <ImgbotChat src={Partido} onClick={() => limpaMatch()} />
            </CorPart>
        </HeaderCard>
        <hr />
        <ListaBP>
            {listaBatepapo}
        </ListaBP>
    </CardMatchs>
}
export default SeusMatches;