import React from "react"
import { Link, useNavigate } from "react-router-dom";
import { ButtonAll, CardBoxAll, InputAll, Texth1, Text } from "../../components/StyledAll";
import useForm from "../../hooks/useForm";
import useUnProtectPage from "../../hooks/useUnProtectPage";
import {login} from "../../services/useRequire"


const LoginPage = () => {
    const navigate = useNavigate();
    const [formUse, onChange, clear] = useForm({ email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(formUse, clear, navigate)
        console.log("formUse",formUse)
    }

    return (
        <CardBoxAll>
            <Texth1>Caderno de Receitas</Texth1>
            <form onSubmit={onSubmitForm}>
                <div>
                    <Text>E-mail:</Text>
                    <InputAll
                        name={"email"}
                        value={formUse.email}
                        onChange={onChange}
                        placeholder="e-mail"
                        required
                        type={"email"} />
                </div>
                <div>
                    <Text>Senha:</Text>
                    <InputAll
                        name={"password"}
                        value={formUse.password}
                        onChange={onChange}
                        placeholder="senha"
                        required
                        type={"password"}
                    />
                </div>
                    <ButtonAll type={"submit"} >
                        Login
                    </ButtonAll>
            </form>
            <div>
                <div>Não possui conta?</div>
                <Link to="/LoginPage/SignUpPage">
                    <ButtonAll  >
                        Cadastre-se
                    </ButtonAll>
                </Link>
            </div>
        </CardBoxAll>
    )
}
export default LoginPage; 