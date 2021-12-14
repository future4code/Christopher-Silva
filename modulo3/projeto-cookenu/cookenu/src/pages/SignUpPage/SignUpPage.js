import React from "react"
import { Link, useNavigate } from "react-router-dom";
import { ButtonAll, CardBoxAll, InputAll, Text, Texth1 } from "../../components/StyledAll";
import useForm from "../../hooks/useForm";
import useProtectPage from "../../hooks/useProtectionPage";
import { signUp } from "../../services/useRequire";


const SignUpPage = () => {
    const navigate = useNavigate();
    const [formUse, onChange, clear] = useForm({ name: "", email: "", password: "" })
    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log("fomr use", formUse)
        signUp(formUse, clear, navigate)
    }
    return (
        <CardBoxAll>
            <Texth1>Cadastro de Usuário</Texth1>
            <form onSubmit={onSubmitForm}>
                <div>
                    <Text>Nome:</Text>
                    <InputAll
                        name={"name"}
                        value={formUse.name}
                        onChange={onChange}
                        placeholder="nome"
                        required
                        type={"text"} />
                </div>
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
                        Cadastrar
                    </ButtonAll>
               
            </form>
            <Link to="/">
                <ButtonAll type={"submit"} >
                    Voltar
                </ButtonAll>
            </Link>
        </CardBoxAll>
    )
}
export default SignUpPage;