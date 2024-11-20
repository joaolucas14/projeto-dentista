import styles from "./Localizacao.module.scss";

export default function Localizacao() {
  return (
    <div className={styles.iframe_container}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14698.769817377888!2d-43.2239911!3d-22.9247118!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997ff69d9c6eab%3A0x222f8f6ac2d13ba2!2sCruz%20e%20Mendon%C3%A7a%20Odontologia!5e0!3m2!1spt-BR!2sbr!4v1732128173395!5m2!1spt-BR!2sbr"
        title="Mapa Responsivo"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
