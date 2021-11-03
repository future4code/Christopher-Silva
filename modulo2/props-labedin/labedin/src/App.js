import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';



function App() {
  return (
    <div className="App">

      <h2>Dados pessoais</h2>
      <div className="coluna">
        <div className="page-section-container">

          <div>
            <CardGrande
              imagem="https://scontent-gru2-1.xx.fbcdn.net/v/t1.6435-9/242067472_4461141483962098_1289362896192056543_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeE0lpdGSJ6r28LoMBV9nVu6cvQn-SiKLixy9Cf5KIouLGvp04Rsl87kQAY8cpBkf_6dEiKXi9WLf4rtP-d9tpBb&_nc_ohc=RbvXL-frGBwAX-hnOF0&_nc_ht=scontent-gru2-1.xx&oh=92e9a826f2bd64f0347ae4fbf1f13270&oe=61A71BE1"
              nome="Christopher Feilstrecker da Silva"
              descricao="Oi, eu sou o Christopher, sou aluno de desenvolvimento web fullstack na Labenu."
            />

            <ImagemButton
              imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
              texto="Ver mais"
            />
          </div>

          <CardPequeno
            logo="https://w7.pngwing.com/pngs/1011/641/png-transparent-message-logo-yahoo-mail-email-address-webmail-email-icon-miscellaneous-angle-triangle.png"
            tipo="E-mail:"
            descricao="jokinha95@gmail.com"
          />

          <CardPequeno
            logo="https://w7.pngwing.com/pngs/55/444/png-transparent-computer-icons-location-symbol-location-miscellaneous-sign-map-thumbnail.png"
            tipo="Endereço:"
            descricao="Flórida/EUA"
          />

          <div className="page-section-container">
            <h2>Experiências profissionais</h2>
            <CardGrande
              imagem="https://scontent-gru2-1.xx.fbcdn.net/v/t1.6435-9/134672117_3644817902271381_2323132900867863882_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGtUV18wNVe4Y1xqcwoCFuhTL5ZqLo_MltMvlmouj8yWzOQVWNLTgX8lrZYLoeYPdgy-jFqT62XqZtaPlXvBjvz&_nc_ohc=PhDBVDR2znwAX9k_Bwb&_nc_ht=scontent-gru2-1.xx&oh=cbe7c78fefc3470985a65b192e3123b4&oe=61AA5FFB"
              nome="Rush House"
              descricao="Gráfica expressa e serviços em geral"
            />

            <CardGrande
              imagem="https://scontent-gru1-1.xx.fbcdn.net/v/t1.6435-9/33853794_1649459705109834_7071013944571199488_n.png?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGHwwz3_THZa3v2vIi-bi0Fq2PkvjRxVYGrY-S-NHFVgWHTSFI48pKsqM3JiBiFbKzwHeB1VMRHCqc9sev4_sr1&_nc_ohc=QnZwoYx8PeYAX9_pT_r&_nc_ht=scontent-gru1-1.xx&oh=6f58df3c5d5c95f6d6421f569e25d476&oe=61A7238A"
              nome="Olé Mexicano"
              descricao="Restaurante"
            />
          </div>
        </div>
        <main>
          <p>Sobre mim</p>
        </main>
      </div>









      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
