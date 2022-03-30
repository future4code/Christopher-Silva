import axios from 'axios';
import { useEffect, useState } from 'react';
import './intro.scss';


export default function Intro() {
  const [lottery, setLottery] = useState("2359");
  const [lotterySort, setLotterySort] = useState([""]);
  let [color, setColor] = useState("")
  
  var date = lotterySort.data && lotterySort.data.split("T");
  var dateSplit = date && date[0].split("-")
  var dateSort = dateSplit && dateSplit[2]+"/"+dateSplit[1]+"/"+dateSplit[0];
      
  const getSort = (lottery) => {
    axios
      .get(`https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${lottery}`)
      .then((response) => {
        setLotterySort(response.data);
      })
      .catch((error) => console.log(error.message));
  };
  console.log(lotterySort);
  const onChangeLottery = (ev) => {
    setLottery(ev.target.value);
  };


  const lotteryNum = lotterySort.numeros && lotterySort.numeros.map((num) => {
    console.log(num)
    return <div key={num}>
      <strong className='ball'>{num}</strong>
    </div>
  })
     
  
  const logo = () => {
    
    switch (lottery) {
      case "2359":
      if(!color || color !== '#00923f' ){
      setColor ('#00923f');
      }  
    return <div className="middleContainer">
          <img src="assets/trevo-megasena.png" alt="logo" />
          <strong className="div">MEGA-SENA</strong>
        </div>;
      case "5534":
        if(!color || color !== '#2a2879' ){
          setColor ('#2a2879');
          } 
        return <div className="middleContainer">
          <img src="assets/trevo-quina.png" alt="logo" />
          <strong className="div">QUINA</strong>
        </div>;
      case "2200":
        if(!color || color !== '#90546f' ){
          setColor ('#90546f');
          } 
          return <div className="middleContainer">
            <img src="assets/trevo-lotofacil.png" alt="logo" />
            <strong className="div">LOTOFÁCIL</strong>
          </div>;
      case "2167":
        if(!color || color !== '#ff7f27' ){
          setColor ('#ff7f27');
          }
        return <div className="middleContainer">
          <img src="assets/trevo-lotomania.png" alt="logo" />
          <strong className="div">LOTOMANIA</strong>
        </div>;
      case "1622":
        if(!color || color !== '#fff500' ){
          setColor ('#fff500');
          }
        return <div className="middleContainer">
          <img src="assets/trevo-timemania.png" alt="logo" />
          <strong className="div">TIMEMANIA</strong>
        </div>; 
      case "440":
        if(!color || color !== '#d3ac2b' ){
          setColor ('#d3ac2b');
          }
        return <div className="middleContainer">
          <img src="assets/trevo-diadesorte.png" alt="logo" />
          <strong className="div">DIA DE SORTE</strong>
        </div>;       
      default:
        if(!color || color !== '#009e4c' ){
          setColor ('#009e4c');
          }
        return <div className="middleContainer">
          <img src="assets/trevo-megasena.png" alt="logo" />
          <strong className="div">MEGA-SENA</strong>
        </div>;
    }
  }

  useEffect(() => {
    getSort(lottery);
  }, [lottery])
  return (
    <div className='intro' id='intro'style={{ backgroundColor: `${color}` }}>
      <div className="left">
        <div className="selectContainer">
          <select onChange={onChangeLottery}>
            <option value="2359">MEGA-SENA</option>
            <option value="5534">QUINA</option>
            <option value="2200">LOTO FÁCIL</option>
            <option value="2167">LOTO MANIA</option>
            <option value="1622">TIME MANIA</option>
            <option value="440">DIA DE SORTE</option>
          </select>
        </div>
        <div className="middleContainer" >
          {logo()}
        </div>
        <div className="BottonContainer" >
          <div className="concursoTitle">CONCURSO</div>
          <strong>{lottery} - {dateSort}</strong>
        </div>
      </div>
      <div className="rigth">
        <div></div>
        <div className="wrapper">
          <div className="ballContainer">
            {lotteryNum}
          </div>

        </div>
        <div className="textContainer" id="a">
          <div className="text">Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</div>
        </div>
      </div>
    </div>
  )
}

