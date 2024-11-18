import styles from "./Procedimentos.module.scss";
import botox from "./botox.png";
import implante from "./implante.png";
import preenchimento from "./preenchimento.png";
import papada from "./papada.png";
import clareamento from "./clareamento.png";
import faceta from "./faceta.png";
import LinkPersonalizado from "../LinkPersonalizado";
import Card from "./Card";

export default function Procedimentos() {
  return (
    <>
      <h1 className={styles.titulo}>Nossos procedimentos</h1>
      <div className={styles.container}>
        <Card img={botox} alt={"Imagem botox"}>
          <h1>TOXINA BOTULÍNICA</h1>
          <p>
            Procedimento estético que reduz linhas de expressão e rugas,
            proporcionando um aspecto mais jovem e suave à pele.
          </p>
        </Card>
        <Card img={implante} alt={"Imagem implante"}>
          <h1>IMPLANTE DENTAL</h1>
          <p>
            Uma solução duradoura para substituir dentes ausentes e recuperar
            sua confiança e função mastigatória.
          </p>
        </Card>
        <Card img={preenchimento} alt={"Preenchimento Labial"}>
          <h1>PREENCHIMENTO COM ÁCIDO HIALURÔNICO</h1>
          <p>
            Técnica utilizada para melhorar contornos faciais, adicionar volume
            e corrigir assimetrias.
          </p>
        </Card>
        <hr className={styles.divisa} />
        <Card img={papada} alt="Cirurgia Bucomaxilofacial">
          <h1>CIRURGIA BUCOMAXILOFACIAL</h1>
          <p>
            Trata problemas dentários, faciais e maxilares, como traumas,
            deformidades e procedimentos complexos.
          </p>
        </Card>
        <Card img={clareamento} alt={"Clareamento dental"}>
          <h1>CLAREAMENTO DENTAL</h1>
          <p>
            Procedimento que visa clarear os dentes, removendo manchas e
            promovendo um sorriso mais branco e radiante
          </p>
        </Card>
        <Card img={faceta} alt="Faceta em resina e lentes de porcelana">
          <h1>FACETAS EM RESINA E LENTES DE PORCELANA</h1>
          <p>
            Procedimentos estéticos que melhoram a aparência dos dentes,
            corrigindo imperfeições e proporcionando um sorriso mais harmonioso.
          </p>
        </Card>
        <div className={styles.link}>
          <LinkPersonalizado>AGENDE SUA CONSULTA</LinkPersonalizado>
        </div>
      </div>
    </>
  );
}
