import axios from 'axios';
import React from 'react';


export default class TelaCadastro extends React.Component {
    state = {
        nome: "",
        email: "",

    }


    handleNome = (e) => {
        this.setState({ nome: e.target.value })
    }
    handleEmail = (e) => {
        this.setState({ email: e.target.value })
    }
    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }
        axios.post(url, body, {
            headers: {
                Authorization: "christopher-feilstecker-carver"
            }
        }).then((res) => {
            alert("Usuário cadastrado com sucesso")
            this.setState({name:"",email:""})
        })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }
    render() {
        return (
            <div>
                <button onClick={this.props.irTelaLista}>Lista de Usuários</button>
                <h2>Cadastro de Usuarios</h2>
                <input
                    placeholder={"Nome"}
                    value={this.state.nome}
                    onChange={this.handleNome}
                />
                <input
                    placeholder={"E-mail"}
                    value={this.state.email}
                    onChange={this.handleEmail}
                />
                <button onClick={this.fazerCadastro}>Cadastrar</button>
            </div>
        );
    }
}