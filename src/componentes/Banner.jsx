import "./Banner.css";
import img from "/public/imagens/banner.png";
function Banner() {
  return (
    <header className="banner">
      <img src={img} alt="Banner principal da Página do Organo" />
    </header>
  );
}

export default Banner;
