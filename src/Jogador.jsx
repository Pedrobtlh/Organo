import "./Jogador.css";

const Jogador = ({ nome, imagem, elo }) => {
  return (
    <div className="colaborador">
      <div className="cabecalho">
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{elo}</h5>
      </div>
    </div>
  );
};

export default Jogador;
