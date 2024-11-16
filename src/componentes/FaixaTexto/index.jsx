import styles from "./FaixaTexto.module.scss";

export default function FaixaTexto() {
  return (
    <>
      <h1 className={styles.titulo}>
        Sua Clínica Odontológica Especializada <br /> Reabilitação Oral
      </h1>
      <h2 className={styles.subTitulo}>
        Elevando sua beleza e elevando sua confiança
      </h2>
    </>
  );
}
