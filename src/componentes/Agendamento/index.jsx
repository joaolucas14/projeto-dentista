import styles from "./Agendamento.module.scss";
import Formulario2 from "./Formulario2";
import logo from "./logo.png";
import like from "./gostar.png";
import localizacao from "./localizao.png";
import telefone from "./telefone.png";
import instagram from "./instagram.png";
import facebook from "./facebook.png";

export default function Agendamento() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <img src={logo} alt="" />
        <h1>Faça o agendamento</h1>
        <p>
          Temos um ambiente climatizado, com uma decoração incrível para te
          receber, use o formulário que está nesta tela para agendar uma
          consulta ou o botão do WhatsApp
        </p>
        <h2>Contatos</h2>
        <div className={styles.contatos}>
          <div>
            <img className={styles.icone} src={localizacao} alt="Localização" />
            <p>
              Rua Conde de Bonfim, 99 - sala 610 Tijuca, Rio de Janeiro - RJ
            </p>
          </div>

          <div>
            <img className={styles.icone} src={telefone} alt="Localização" />
            <p>
              <a href="#">21 99631-7532</a>
            </p>
          </div>

          <div>
            <img className={styles.icone} src={like} alt="Gostei" />
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
          </div>
        </div>
      </div>
      <div className={styles.formulario}>
        <Formulario2 />
      </div>
    </div>
  );
}
