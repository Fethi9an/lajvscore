import Link from 'next/link';
import styles from "./Navbar.module.css"
export default function Navbar() {
  return (
    <nav className={styles.nav}>
        <ui>
          <Link href="/">
            Home
          </Link>
        </ui>
        <ul>
          <Link href="/leagues/premierleague">
            Premier League
          </Link>
        </ul>
        <ul>
          <Link href="/leagues/la-liga">
            La Liga
          </Link>
        </ul>
        <ul>
          <Link href="/leagues/bundesliga">
            Bundesliga
          </Link>
        </ul>
        <ul>
          <Link href="/leagues/serie-a">
            Serie A
          </Link>
        </ul>
        <ul>
          <Link href="/leagues/ligue-1">
            Ligue 1
          </Link>
        </ul>
    </nav>
  );
}
