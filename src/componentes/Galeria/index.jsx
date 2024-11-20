import styles from "./Galeria.module.scss";
import Carrosel from "./Carrosel";
import LinkAlternativo from "../LinkAlternativo";

export default function Galeria() {
  return (
    <div className={styles.container}>
      <h1>Galeria de Transformações</h1>
      <h2>
        Fique impressionado com os resultados alcançados em nossos pacientes.
        Confira as transformações que destacam nossa dedicação.
      </h2>
      <Carrosel />

      <div className={styles.link}>
        <LinkAlternativo>AGENDE SUA CONSULTA</LinkAlternativo>
      </div>
    </div>
  );
}
