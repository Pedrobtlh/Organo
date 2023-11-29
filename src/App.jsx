import { useState } from "react";
import "./App.css";
//Componentes
import Banner from "./componentes/Banner";
import CampoTexto from "./componentes/CampoTexto";
import Formulario from "./componentes/Formulario";

function App() {
  const [jogadores, setJogadores] = useState([]);

  const aoNovoJogadorAdicionado = (jogador) => {
    console.log(jogador);
    setJogadores([...jogadores, jogador]);
  };

  return (
    <div className="app">
      <Banner />
      <Formulario
        aoNovoJogadorAdicionado={(jogador) => aoNovoJogadorAdicionado(jogador)}
      />
    </div>
  );
}

export default App;
