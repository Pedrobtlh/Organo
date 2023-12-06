import { useState } from "react";
import "./App.css";
//Componentes
import Banner from "./componentes/Banner";
import CampoTexto from "./componentes/CampoTexto";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {
  const [times, setTimes] = useState([
    {
      nome: "Top",
      cor: "#57c278",
    },
    {
      nome: "Mid",
      cor: "#82CFFA",
    },
    {
      nome: "Jungle",
      cor: "#A6D157",
    },
    {
      nome: "ADC",
      cor: "#E06869",
    },
    {
      nome: "Suporte",
      cor: "#DB6EBF",
    },
  ]);

  const [jogadores, setJogadores] = useState([]);

  const aoNovoJogadorAdicionado = (jogador) => {
    setJogadores([...jogadores, jogador]);
  };

  function deletarJogador() {
    console.log("Deletando Colaborador");
  }

  function mudarCorDoTime(cor, nome) {
    setTimes(
      times.map((time) => {
        if (time.nome === nome) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  return (
    <div className="app">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoNovoJogadorAdicionado={(jogador) => aoNovoJogadorAdicionado(jogador)}
      />

      {times.map((time) => (
        <Time
          mudarCor={mudarCorDoTime}
          key={time.nome}
          nome={time.nome}
          cor={time.cor}
          jogadores={jogadores.filter((jogador) => jogador.lane === time.nome)}
          aoDeletar={deletarJogador}
        />
      ))}
    </div>
  );
}

export default App;
