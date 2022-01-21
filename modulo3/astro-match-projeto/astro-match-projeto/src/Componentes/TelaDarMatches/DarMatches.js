import { HeaderCard, CardDarMatches, CardIcones, Desc, CardPerfil, Imgbot, ImgPerfil, ImgP, TextoBio, ImgbotCor, Carreg } from "./styledDarMatches"
import Logomarca from "../../img/match.png"
import { React, useEffect, useState } from "react"
import IconeCoracao from "../../img/icone-coração.png"
import IconeX from "../../img/icone-x.png"
import CorFlecha from "../../img/coracao-flecha.jpg"

import axios from "axios"
import '../../App.css'
import { ImgLogo } from "../TelaMatches/styledSeusMatches"

const DarMatches = (props) => {
    const [perfilNaoVisto, setPerfilNaoVisto] = useState({})
    const [carregando,setCarregando]= useState("")

    const perfisNãoVistos = () => {
setCarregando("carregando")
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Christopher/person')
            .then((res) => {
                setPerfilNaoVisto(res.data.profile)
                setCarregando("carregou")
            })
            .catch((err) => {
            })
    }

    const enviarPerfilComLike = (idLike) => {
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Christopher/choose-person',
            {
                id: idLike,
                choice: true
            })
            .then((res) => {
                perfisNãoVistos()
            })
            .catch((err) => {
            })
    }

    const passaPerfil = () => {
        if(carregando === "carregou"){
        return <CardPerfil>
            <ImgPerfil>
                <ImgP src={perfilNaoVisto.photo} alt={perfilNaoVisto.name} />
            </ImgPerfil>
            <Desc>
                <div>{perfilNaoVisto.name},</div>
                <div>{perfilNaoVisto.age}</div>
            </Desc>
            <TextoBio>{perfilNaoVisto.bio}</TextoBio>
            <CardIcones class='grow'>
                <Imgbot src={IconeX} onClick={() => perfisNãoVistos()} alt="iconX" />
                <Imgbot src={IconeCoracao} onClick={() => enviarPerfilComLike(perfilNaoVisto.id)} alt={perfilNaoVisto.name} />
            </CardIcones>
        </CardPerfil>
        }else if(carregando === "carregando"){
            return <Carreg>...Carregando</Carreg>
        }
    }

    useEffect(() => {
        perfisNãoVistos();
    }, []);
    return <div>
        <HeaderCard>
            <ImgbotCor src={CorFlecha} onClick={() => { props.seusMatches() }} />
            <ImgLogo src={Logomarca} alt="logomarca" />
        </HeaderCard>
        <hr />
        <CardDarMatches>
            {passaPerfil()}
        </CardDarMatches>
    </div>
}
export default DarMatches;