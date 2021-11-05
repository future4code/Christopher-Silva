import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post'



const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`


class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'Ricardo',
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/151'
      },
      {
        nomeUsuario: 'Pedro',
        fotoUsuario: 'https://picsum.photos/50/52',
        fotoPost: 'https://picsum.photos/200/152'
      }
    ],
    valorInputNome: "",
    valorInputFotoPerfil: "",
    valorInputFotoPost: ""
  };

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoPerfil,
      fotoPost: this.state.valorInputFotoPost
    }
    const arrayComNovoPost = [...this.state.posts, novoPost]
    this.setState({ posts:arrayComNovoPost});
    
  };
  

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputFotoPerfil = (event) => {
    this.setState({ valorInputFotoPerfil: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {
    
    return (
      <div>
        <input
          value={this.state.valorInputNome}
          onChange={this.onChangeInputNome}
          placeholder={"Nome"}
        />
        <input
          value={this.state.valorInputFotoPerfil}
          onChange={this.onChangeInputFotoPerfil}
          placeholder={"Foto Perfil"}
        />
        <input
          value={this.state.valorInputFotoPost}
          onChange={this.onChangeInputFotoPost}
          placeholder={"Foto Post"}
        />
        <button onClick={this.adicionaPost}>Adicionar</button>

        {this.state.posts.map((postUsuario) => {
          return (
              <MainContainer>
                <Post
                  nomeUsuario={postUsuario.nomeUsuario}
                  fotoUsuario={postUsuario.fotoUsuario}
                  fotoPost={postUsuario.fotoPost}
                />
              </MainContainer>
          )
        })
        }

      </div>
    )
  }
}
export default App;
