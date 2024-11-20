import styles from "./LinkAlternativo.module.scss";

export default function LinkAlternativo({ children, url }) {
  return (
    <a className={styles.link_alternativo} href={url}>
      {children}
    </a>
  );
}
