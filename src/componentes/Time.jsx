import Jogador from "../Jogador";
import "./Time.css";

const Time = (props) => {
  return (
    props.jogadores.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: props.corSecundaria }}
      >
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="jogadores">
          {props.jogadores.map((jogador) => (
            <Jogador
              key={jogador.nome}
              nome={jogador.nome}
              elo={jogador.elo}
              imagem={jogador.imagem}
              corDeFundo={props.corPrimaria}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
