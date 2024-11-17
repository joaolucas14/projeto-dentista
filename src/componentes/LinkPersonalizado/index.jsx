import styles from "./LinkPersonalizado.module.scss";

export default function LinkPersonalizado({ children, url, inverte }) {
  return (
    <a className={inverte ? styles.link_invertido : styles.link} href={url}>
      {children}
    </a>
  );
}
