import { useState } from "react";
import "./App.css";
//Componentes
import Banner from "./componentes/Banner";
import CampoTexto from "./componentes/CampoTexto";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {
  const times = [
    {
      nome: "Top",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Mid",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Jungle",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "ADC",
      corPrimaria: "#E06869",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "Suporte",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#F0F8E2",
    },
  ];

  const [jogadores, setJogadores] = useState([]);
  debugger;
  const aoNovoJogadorAdicionado = (jogador) => {
    setJogadores([...jogadores, jogador]);
  };

  return (
    <div className="app">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoNovoJogadorAdicionado={(jogador) => aoNovoJogadorAdicionado(jogador)}
      />

      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          jogadores={jogadores.filter((jogador) => jogador.lane === time.nome)}
        />
      ))}
    </div>
  );
}

export default App;
