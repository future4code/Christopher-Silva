import { Link } from "react-router-dom";
import { Body } from "../../Styled";
import { AdminBody, AdminBoxBody, HeaderAdmin } from "./AdminHomeLayout";

const AdminHomePage = () => {

  return (
    <Body>
      <HeaderAdmin>
        <div>
          Painel Administrativo
        </div>
        <button><Link to="/admin/trips/:id">Inscritos</Link></button>
        <div>
          <button>Logout</button>
          <button><Link to="/home">Home</Link></button>
        </div>
      </HeaderAdmin>
      <AdminBody>
        <AdminBoxBody>
          <h2>Criar Viagem</h2>
          <input placeholder={"Nome"} />
          <select name="planetas">
            <option value="Planeta1">Planeta1</option>
            <option value="planeta2" >Planeta2</option>
            <option value="planeta3">Planeta3</option>
          </select>
          <input placeholder="Data" type="date" name="date" required="" min="2021-12-07" value=""></input>
          <input placeholder={"Descrição"} />
          <input placeholder={"Duração(dias)"} />
        </AdminBoxBody>
        <AdminBoxBody>
          <h2>Viagens Disponiveis</h2>
        </AdminBoxBody>
      </AdminBody>
    </Body>
  );
}

export default AdminHomePage;