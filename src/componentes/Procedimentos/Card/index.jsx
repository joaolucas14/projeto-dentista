import styles from "./Card.module.scss";

export default function Card({ img, alt, children }) {
  return (
    <div className={styles.card}>
      <img src={img} alt={alt} />
      {children}
    </div>
  );
}
