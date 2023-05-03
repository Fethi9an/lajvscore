import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src="/soccer-ball.png" alt="Soccer ball" />
        <h1 className={styles.title}>LajvScore</h1>
      </div>
      <p className={styles.subtitle}>Your go-to source for live soccer scores and updates.</p>
    </header>
  );
}
