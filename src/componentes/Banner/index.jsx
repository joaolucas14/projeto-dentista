import styles from "./Banner.module.scss";
import imagemDonos from "/imagens/donos.png";
import Formulario from "../Formulario/index";

export default function Banner() {
  return (
    <div className={styles.main} id="banner">
      <div className={styles.titulo}>
        <h1>Clínica Odontológica na Tijuca</h1>
        <h2>Todos os tratamentos no mesmo lugar!</h2>
      </div>

      <div className={styles.container}>
        <img className={styles.donos} src={imagemDonos} alt="" />
        <Formulario />
      </div>
    </div>
  );
}
