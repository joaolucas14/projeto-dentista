import styles from "./Clinica.module.scss";
import Carrosel from "./Carrosel";

export default function Clinica() {
  return (
    <div className={styles.container}>
      <div className={styles.texto}>
        <h1>A Clínica</h1>
        <p>
          A Clínica Odontológica 3D Dental Studio é especializada em estética
          facial e Implante Dentário, oferecendo procedimentos de alta
          qualidade, seguros e personalizados. Com uma equipe dedicada e uma
          abordagem humanizada, buscamos elevar a beleza e a confiança de nossos
          pacientes, proporcionando transformações notáveis e sorrisos
          radiantes. Sinta-se bem-vindo em um ambiente acolhedor, onde saúde e
          estética caminham juntas.
        </p>
      </div>
      <div className={styles.carrosel}>
        <Carrosel />
      </div>
    </div>
  );
}
