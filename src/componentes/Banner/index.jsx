import styles from "./Banner.module.css";
import imagemDonos from "../../../public/imagens/donos.png";
import Formulario from "../Formulario/index";

export default function Banner() {
  return (
    <div className={styles.main}>
      <div className={styles.titulo}>
        <h1>Clínica Odontológica na Tijuca</h1>
      </div>

      <div className={styles.container}>
        <img className={styles.donos} src={imagemDonos} alt="" />
        <Formulario />
      </div>
    </div>
  );
}
