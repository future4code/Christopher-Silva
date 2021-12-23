import { Button} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { registUser } from "../../service/useRequire";
import { Inputs, InputsLogin, CardContainer, ScreenContainer } from "../../components/Styled"

const RegisterPage = () => {
    const navigate = useNavigate();
    const [formUse, onChange, clear] = useForm({username:"", email:"", password:""})
  
    const onSubmitForm = (event) => {
      event.preventDefault()
      registUser(formUse, clear, navigate)
      console.log("formUse", formUse)
    }

    return (
      <ScreenContainer>
      <CardContainer>
        <InputsLogin onSubmit={onSubmitForm}>
          
            <Inputs
              name={"username"}
              value={formUse.username}
              onChange={onChange}
              placeholder="Nome de usuário"
              required
              type={"text"} />
          
        
            <Inputs
              name={"email"}
              value={formUse.email}
              onChange={onChange}
              placeholder="E-mail"
              required
              type={"email"} />
          

            <Inputs
              name={"password"}
              value={formUse.password}
              onChange={onChange}
              placeholder="Senha"
              required
              type={"password"}
            />
          
          <Button variant="contained" color="primary" type={"submit"} >
            Cadastrar
          </Button>
        </InputsLogin>

      </CardContainer>

    </ScreenContainer>
    );
  }
  export default RegisterPage;