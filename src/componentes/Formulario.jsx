import { useState } from "react";
import Botao from "./Botao";
import CampoTexto from "./CampoTexto";
import "./Formulario.css";
import ListaSuspensa from "./ListaSuspensa";

const Formulario = () => {
  const lanes = ["Top", "Mid", "Jungle", "ADC", "Suporte"];

  const [nome, setNome] = useState("");
  const [elo, setElo] = useState("");
  const [imagem, setImagem] = useState("");
  const [lane, setLane] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log(nome, elo, imagem, lane);
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os Dados para criar o Card do Jogador</h2>
        <CampoTexto
          label="Nome"
          placeholder="Digite o Nome do Jogador"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          label="Elo"
          placeholder="Qual é o Elo do Jogador?"
          valor={elo}
          aoAlterado={(valor) => setElo(valor)}
        />
        <ListaSuspensa
          label="Lane"
          itens={lanes}
          valor={lane}
          aoAlterado={(valor) => setLane(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o Endereço da Imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <Botao texto="Criar Card" />
      </form>
    </section>
  );
};

export default Formulario;
