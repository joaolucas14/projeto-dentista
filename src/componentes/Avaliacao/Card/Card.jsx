import styles from "./Card.module.scss";
import estrelas from "./estrelas.png";
import aspas from "./aspas.png";

export default function Card({ nome, children }) {
  return (
    <div className={styles.card}>
      <h1 className={styles.nome}>{nome}</h1>
      <img className={styles.estrelas} src={estrelas} alt="Estrelas" />
      <p>{children}</p>
      <img className={styles.aspas} src={aspas} alt="" />
    </div>
  );
}
