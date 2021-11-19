import React from "react"
import styled from "styled-components"
import axios from "axios"

const List = styled.li`
height:30px;
width:170px;
font-size:25px;
border:1px solid orange;
display:flex;
justify-content: space-between;
`
const Cardfy = styled.div`
display:grid;
grid-template-columns:1fr 4fr;
width:100wh;
height:100vh;
border: 2px solid red
`
const CardPlaylist = styled.div`
border:1px solid black;
display:flex;
flex-direction:column;
align-items: center
`
const Body = styled.div`
display:flex;
flex-direction:column;
border:3px solid blue
`
const Head = styled.div`
border: 1px solid yellow;
background-color:grey;
height: 50px;
display:flex;
align-items:center;
justify-content:center;

`


export default class App extends React.Component {
  state = {
    nome: "",
    playlists: [],
    musicas: [],
    acessar: "fechado",
    nomeMusica: "FFF",
    nomeCantor: "BBB",
    urlVideo: "https://www.youtube.com/watch?v=pXRviuL6vMY&list=RDMMpXRviuL6vMY&start_radio=1",


  }
  componentDidMount() {
    this.listarPlaylist()
  }
  handleNome = (e) => {
    this.setState({ nome: e.target.value })
  }
  deletaPlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    axios.delete(url, {
      headers: {
        Authorization: "christopher-feilstrecker-silva"
      }
    })
      .then((res) => {
        this.listarPlaylist()
      })
      .catch((err) => {
        alert(err.response.data)
      })
  }
  criarPlaylist = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
      name: this.state.nome
    }
    axios.post(url, body, {
      headers: {
        Authorization: "christopher-feilstrecker-silva"
      }
    })
      .then((res) => {
        console.log("Playlist cadastrada")
        this.setState({ nome: "" })
        this.listarPlaylist()
      })
      .catch((err) => {
        alert("Ja existe uma playlist com esse nome, escolha um nome diferente")
      })
  }

  listarPlaylist = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    axios.get(url, {
      headers: {
        Authorization: "christopher-feilstrecker-silva"
      }
    }).then((res) => {
      this.setState({ playlists: res.data.result.list })
    })
      .catch((err) => {
        alert(err.response.data)
      })
  }
  abrePlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    axios.get(url, {
      headers: {
        Authorization: "christopher-feilstrecker-silva"
      }
    })
      .then((res) => {
        this.setState({ musicas: res.data.result.tracks })
        console.log(res.data.result.tracks)
        this.abriLista()
      })
      .catch((err) => {
        alert(err.response)
      })
  }
  deletaMusica = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks/${id}`
    axios.delete(url, {
      headers: {
        Authorization: "christopher-feilstrecker-silva"
      }
    })
      .then((res) => {
        this.abrePlaylist()
      })
      .catch((err) => {
        alert(err.response.data)
      })
  }

  


  

  abriLista = () => {
    this.setState({ acessar: "aberto" })
  }
  fecharLista = () => {
    this.setState({ acessar: "fechado" })
  }
  render() {
    const listaDePlaylist = this.state.playlists.map((tipo) => {
      return <li><List key={tipo.id}>
        {tipo.name}
        <button onClick={() => this.deletaPlaylist(tipo.id)}>Apagar</button>
        <button onClick={() => this.abrePlaylist(tipo.id)}>Acessar</button>
      </List></li>
    })
    const listaDeMusicas = this.state.musicas.map((musica) => {
      return <div key={musica.id}>
        <p>Adicionar Música</p>
        <input
          placeholder={"nome da música"}
          value={this.state.nomeMusica}
          onChange={this.handleNomeMusica}
        />
        <input
          placeholder={"nome d0 cantor/banda"}
          value={this.state.nomeCantor}
          onChange={this.handleNomeCantor}
        />
        <input
          placeholder={"url da Música"}
          value={this.state.urlVideo}
          onChange={this.handleUrl}
        />
       

      </div>
    })

    const acessaPlaylist = () => {
    switch (this.state.acessar) {
      case "aberto":
        return <div>
          <h1>MUSICAS</h1>
          {listaDeMusicas}
        </div>
      case "fechado":
        return <div>selecione uma lista</div>
      default:
        return <div>erro</div>
    }
  }

    



    return (
      <Cardfy>
        <CardPlaylist>
          <h2>Crie nova playlist</h2>
          <input
            placeholder={"nome da lista"}
            value={this.state.nome}
            onChange={this.handleNome}
          />
          <button onClick={this.criarPlaylist}>Criar</button>
          <h2>Suas playlists</h2>
          <ul>{listaDePlaylist}</ul>
        </CardPlaylist>
        <Body>
          <Head>Minhas Músicas</Head>
          {acessaPlaylist()}
        </Body>
      </Cardfy>
    );
  }
}


