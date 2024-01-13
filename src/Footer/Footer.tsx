import "./Footer.css";
import Logo from "../img/logo.png";

export function Footer() {
  return (
    <div className="Footer">
      <div className="footer-container">
      <div className="section-footer">
        <div className="div-section-inter">
          <img src={Logo} />
          <p className="sobre-footer">
            A Reduto do Nerd foi fundada em 2015 pelos irmãos Thiago e Thiego. A
            loja é resultado da soma da paixão pelo universo nerd com a vontade
            de empreender. Com entregas para todo o Brasil, a Reduto tem como
            principal objetivo atender todos os apaixonados pela cultura pop
            proporcionando uma experiência única.
          </p>
        </div>
        <div className="div-section-inter">Envie uma Mensagem</div>
        <div className="div-section-inter"> Institucional</div>
        <div className="div-section-inter"> Redes Sociais</div>
      </div>
      <div className="section-footer" id="">
        <div className="div-section-inter">Formas de Pagamento</div>
        <div className="div-section-inter"> Segurança</div>
        <div className="div-section-inter">Formas de Envio</div>
      </div>
      </div>
    </div>
  );
}
