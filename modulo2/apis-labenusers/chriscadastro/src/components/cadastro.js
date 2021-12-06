import axios from 'axios';
import React from 'react';

 

export default class cadastro extends React.Component {
    state = {
        inputUser:'',
        inputEmail:'',
        listaUsuarios:[]
    }
    getAllUsers = ()=>{
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',{
            headers:{
                Authorization:"christopher-feilstrecker-carver"
            }
        }
      ).then((res)=>{
          this.setState({listaUsuarios:res.data});
          console.log(res.data)
      }).catch((err)=>{
    console.log(err.response)
      })
    }

    creatUser=()=>{
        const body = {
            name: this.state.inputUser,
            email: this.state.inputEmail
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
         body,
         {
             headers:{
             Authorization:"christopher-feilstrecker-carver"
         }
        }
         ).then((res)=>{
            console.log(this.state.listaUsuarios)
            alert("usuário cadastrado")
         }).catch((err)=>{
             console.log(err.response.data)
             alert("Erro no cadastro, verifique se preencheu os espaços com nome de usuário e e-mail corretamente")
         })
    }

onChangeUser = (event) =>{
    this.setState({inputUser: event.target.value})
}
onChangeEmail = (event) =>{
    this.setState({inputEmail: event.target.value})
}
componentDidMount(){
    this.getAllUsers();
}

deletaUsuario = (id) =>{
    axios.delete('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id',{
        headers:{
            Authorization:'christopher-fesiltrecker-carver'
        }
    }
    )
    .catch((erro)=>{
        console.log(erro.response)
    })
}

    render() {
        const listaDeUsuarios=
        this.state.listaUsuarios.map((usuario)=>
        
        <p>
            {usuario.name} - {usuario.id}
            <button  value={usuario.id} onClick={this.deletaUsuario(this.state.listaUsuarios.id)}>X</button>
        </p>
        
        )
        
        return (
            <div>
                <h1>Cadastro de usuários</h1>
                <input
                        placeholder="Nome de usuário"
                        value={this.state.inputUser}
                        onChange={this.onChangeUser}
                    />
                     <input
                        placeholder="E-mail"
                        value={this.state.inputEmail}
                        onChange={this.onChangeEmail}
                    />
                <button onClick={this.creatUser}>Cadastrar</button>
                <p>{listaDeUsuarios}</p>
            </div>
        )


    }
}