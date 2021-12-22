import { Button} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { login } from "../../service/useRequire";
import { Inputs, InputsLogin, LoginContainer, ScreenContainer } from "../../components/Styled"


const LoginPage = () => {
  const navigate = useNavigate();
  const [formUse, onChange, clear] = useForm({ email: "", password: "" })

  const onSubmitForm = (event) => {
    event.preventDefault()
    login(formUse, clear, navigate)
    console.log("formUse", formUse)
  }
console.log("loclStorage",localStorage.token)
  return (
    <ScreenContainer>
      <LoginContainer>
        <InputsLogin onSubmit={onSubmitForm}>
          <div>
            <Inputs
              name={"email"}
              value={formUse.email}
              onChange={onChange}
              placeholder="E-mail"
              required
              type={"email"} />
          </div>
          <div>
            <Inputs
              name={"password"}
              value={formUse.password}
              onChange={onChange}
              placeholder="Senha"
              required
              type={"password"}
            />
          </div>
          <Button variant="contained" color="primary" type={"submit"} >
            Login
          </Button>
        </InputsLogin>

        <Link to="/RegisterPage"><h1>Criar nova conta</h1></Link>
      </LoginContainer>

    </ScreenContainer>
  );
}
export default LoginPage;