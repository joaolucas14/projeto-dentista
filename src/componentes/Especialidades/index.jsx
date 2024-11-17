import styles from "./Especialidade.module.scss";

import face from "./facial-tratamento.png";
import servico from "./servico-humanizado.png";
import sorriso from "./sorriso.png";
import dente from "./dente.png";

export default function Especialidade() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={face} alt="" />
        <h1>Especialização em Estética facial</h1>
        <p>
          Expertise em procedimentos avançados de estética facial para
          conquistar a aparência dos seus sonhos.
        </p>
      </div>
      <div className={styles.card}>
        <img src={servico} alt="" />
        <h1>Atendimento Humanizado</h1>
        <p>
          Nossa equipe acolhedora cuida de você em cada etapa, proporcionando
          uma experiência personalizada e afetuosa.
        </p>
      </div>
      <div className={styles.card}>
        <img src={sorriso} alt="" />
        <h1>Transformação natural</h1>
        <p>
          Realçamos sua beleza única com resultados naturais e harmônicos.
          Descubra o poder de uma transformação feita com maestria.
        </p>
      </div>
      <div className={styles.card}>
        <img src={dente} alt="" />
        <h1>Sorriso radiante</h1>
        <p>
          Tenha um sorriso deslumbrante! Unimos estética e odontologia para
          ressaltar o poder do seu sorriso na sua beleza geral.
        </p>
      </div>
    </div>
  );
}
