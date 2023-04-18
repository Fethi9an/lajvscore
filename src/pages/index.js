import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Soccer Livescore App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logoContainer}>
          <Link href="/leagues/premierleague">
            <img src="Soccerball.png" alt="Soccerball" className={styles.logo} />
          </Link>
        </div>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Lajvscore</h1>
        </div>
      </main>
    </div>
  );
}
