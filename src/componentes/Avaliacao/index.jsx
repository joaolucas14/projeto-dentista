import styles from "./Avaliacao.module.scss";
import Card from "./Card/Card";

export default function Avaliacao() {
  return (
    <main id="depoimento">
      <h1>O que falam de nós</h1>
      <h2>Depoimentos de nossos pacientes</h2>
      <div className={styles.container}>
        <Card nome={"Luciete Lins"}>
          Dr Lourenzo pessoa incrível excelente profissional acima de tudo
          ,humano ,educado tira todas suas dúvidas só tenho agradecer
        </Card>
        <Card nome={"Edileusa da Silva"}>
          Doutor Lorenzo foi maravilhoso, um excelente profissional, obrigada
          pela sua atenção!
        </Card>
        <Card nome={"Leonardo barbosa"}>
          Atendimento excelente como sempre! Resolução do problema com muita
          eficiência.
        </Card>
        <Card nome={"Angelica"}>
          Fui muito bem atendida, tanto pela Drª Renata quanto pelo Dr. Lorenzo.
          Ambos atenciosos, concluí meu tratamento com êxito e voltarei para
          iniciar outro. Super indico.
        </Card>
      </div>
    </main>
  );
}
