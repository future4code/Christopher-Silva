import { useState} from "react"
import DarMatches from "../TelaDarMatches/DarMatches"
import SeusMatches from "../TelaMatches/SeusMatches"
import { TelaMatch } from "./StyledTela";

const Tela = () => {
    const [telaAtual, settelaAtual] = useState(false)

    const mudaParaSeusMatches = () => {
        settelaAtual(true)
    }
    const mudaParaDarMatches = () => {
        settelaAtual(false)
    }

    const trocaTela = telaAtual ? (<SeusMatches  darMatches={mudaParaDarMatches}  />) : (<DarMatches seusMatches={mudaParaSeusMatches} />)
    return <div>

        <TelaMatch>
            {trocaTela}
        </TelaMatch>
    </div>
}
export default Tela;