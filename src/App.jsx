import { useState } from "react";
import "./App.css";
//Componentes
import Banner from "./componentes/Banner";
import CampoTexto from "./componentes/CampoTexto";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
//Bibliotecas
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Top",
      cor: "#57c278",
    },
    {
      id: uuidv4(),
      nome: "Mid",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Jungle",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "ADC",
      cor: "#E06869",
    },
    {
      id: uuidv4(),
      nome: "Suporte",
      cor: "#DB6EBF",
    },
  ]);

  const [jogadores, setJogadores] = useState([]);

  const aoNovoJogadorAdicionado = (jogador) => {
    const jogadorComID = { ...jogador, id: uuidv4() };
    setJogadores([...jogadores, jogadorComID]);
  };

  function deletarJogador(id) {
    setJogadores(jogadores.filter((jogador) => jogador.id !== id));
  }

  function mudarCorDoTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
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
          id={time.id}
          jogadores={jogadores.filter((jogador) => jogador.lane === time.nome)}
          aoDeletar={deletarJogador}
        />
      ))}
    </div>
  );
}

export default App;
