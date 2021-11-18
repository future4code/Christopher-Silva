import React from 'react'
import axios from 'axios';

export default class TelaListaUsuarios extends React.Component{
state={
    lista:[]
}
    componentDidMount(){
        this.pegarUsuarios()
    }
pegarUsuarios=()=>{
    const url="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios.get(url,{
        headers:{
            Authorization: "christopher-feilstecker-carver"
        }
    })
    .then((res)=>{
this.setState({lista:res.data})
    })
    .catch((err)=>{
alert("Erro! Atualize a página e tente novamente!")
    })
}
deletaUsuario=(id)=>{
    const url=`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
axios.delete(url,{
    headers:{
        Authorization: "christopher-feilstecker-carver"
    }
})
.then(()=>{
alert("Usuario deletado")
this.pegarUsuarios()
})
.catch(()=>{
alert("Ocorreu um erro, tente novamente")
})
}
    render(){
        const listaUsuarios = this.state.lista.map((user)=>{
            return(
                 <div
                  key={user.id}>{user.name}
                  <button onClick={()=>this.deletaUsuario(user.id)}>X</button>
                  </div>)
        })
        return(
            <div>
                <button onClick={this.props.irTelaCadastro}>Cadastro de Usuários</button>
                <h2>Lista de Usuarios</h2>
                {listaUsuarios}
            </div>
        )
    }
}