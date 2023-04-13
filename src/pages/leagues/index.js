import Link from 'next/link';
import Navbar from '@/component/Navbar';
function Leagues() {
  return (
    <div>
      <h1>Leagues</h1>
     {/*  <ul>
        <li>
          <Link href="/leagues/premierleague">

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
      </ul> */}
      <Navbar></Navbar>
    </div>
  );
}

export default Leagues;
