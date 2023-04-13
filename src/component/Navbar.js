import Link from 'next/link';
import styles from "./Navbar.module.css"
export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/leagues/premierleague">
            Premier League
          </Link>
        </li>
        <li>
          <Link href="/leagues/la-liga">
            La Liga
          </Link>
        </li>
        <li>
          <Link href="/leagues/bundesliga">
            Bundesliga
          </Link>
        </li>
        <li>
          <Link href="/leagues/serie-a">
            Serie A
          </Link>
        </li>
        <li>
          <Link href="/leagues/ligue-1">
            Ligue 1
          </Link>
        </li>
      </ul>
    </nav>
  );
}
