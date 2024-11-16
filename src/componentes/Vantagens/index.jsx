import styles from "./Vantagens.module.scss";
import relogio from "./relogio.gif";
import cartao from "./cartao.gif";
import garantia from "./garantia.gif";

export default function Vantagens() {
  return (
    <div className={styles.container}>
      <div>
        <img src={relogio} alt="" />
        <p>AGILIDADE</p>
      </div>
      <div>
        <img src={cartao} alt="" />
        <p>
          {" "}
          FACILIDADE NO <br />
          PAGAMENTO
        </p>
      </div>
      <div>
        <img src={garantia} alt="" />
        <p> COM GARANTIA</p>
      </div>
    </div>
  );
}
