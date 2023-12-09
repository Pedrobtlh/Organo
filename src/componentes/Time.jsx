import Jogador from "./Jogador";
import "./Time.css";
import hexToRgba from "hex-to-rgba";

const Time = (props) => {
  return (
    props.jogadores.length > 0 && (
      <section
        className="time"
        style={{
          backgroundImage: "url(../imagens/fundo.png)",
          backgroundColor: hexToRgba(props.cor, "0.6"),
        }}
      >
        <input
          onChange={(evento) => props.mudarCor(evento.target.value, props.id)}
          type="color"
          className="input-cor"
          value={props.cor}
        ></input>
        <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
        <div className="jogadores">
          {props.jogadores.map((jogador) => {
            return (
              <Jogador
                key={jogador.nome}
                id={jogador.id}
                nome={jogador.nome}
                elo={jogador.elo}
                imagem={jogador.imagem}
                corDeFundo={props.cor}
                aoDeletar={props.aoDeletar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
