import styles from "./LinkPersonalizado.module.scss";

export default function LinkPersonalizado({ children, url }) {
  return (
    <a className={styles.link} href={url}>
      {children}
    </a>
  );
}
