import Jogador from "../Jogador";
import "./Time.css";

const Time = (props) => {
  return (
    <section className="time" style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="jogadores">
        {props.jogadores.map((jogador) => (
          <Jogador
            nome={jogador.nome}
            elop={jogador.elo}
            imagem={jogador.imagem}
          />
        ))}
      </div>
    </section>
  );
};

export default Time;
