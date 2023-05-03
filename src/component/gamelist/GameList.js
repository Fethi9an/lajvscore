import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './GameList.module.css';

const FIXTURES_API_URL = 'https://api-football-v1.p.rapidapi.com/v3/fixtures';

const GameList = () => {
  const [nextFixture, setNextFixture] = useState(null);
  const [fixturesLoading, setFixturesLoading] = useState(true);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchNextFixture = async () => {
      try {
        const response = await axios.get(FIXTURES_API_URL, {
          params: { league: '39', season: '2022', next: '1' },
          headers: {
            'X-RapidAPI-Key': '464062bea2mshae4f7e966bfe8d6p1e7bc1jsna9b9c71b4ad2',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
          }
        });
        const formattedNextFixture = {
          homeTeam: response.data.response[0].teams.home.name,
          awayTeam: response.data.response[0].teams.away.name,
          kickoffTime: response.data.response[0].fixture.date
        };
        setNextFixture(formattedNextFixture);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchGames = async () => {
      try {
        const response = await axios.get(FIXTURES_API_URL, {
          params: { league: '39', season: '2022' },
          headers: {
            'X-RapidAPI-Key': '464062bea2mshae4f7e966bfe8d6p1e7bc1jsna9b9c71b4ad2',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
          }
        });
        const formattedGames = response.data.response
          .filter((fixture) => {
            const fixtureDate = new Date(fixture.fixture.date);
            const now = new Date();
            const sevenDaysFromNow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7);
            return fixtureDate >= now && fixtureDate <= sevenDaysFromNow;
          })
          .map((fixture) => {
            return {
              homeTeam: fixture.teams.home.name,
              awayTeam: fixture.teams.away.name,
              homeScore: fixture.goals.home,
              awayScore: fixture.goals.away,
            };
          });
        setGames(formattedGames);
        setFixturesLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNextFixture();
    fetchGames();
  }, []);

  const loadMoreGames = () => {
    setLoading(true);
    setCurrentPage(currentPage + 1);
    axios
      .get('https://api-football-v1.p.rapidapi.com/v3/fixtures', {
        params: { league: '39', season: '2022', page: currentPage + 1 },
        headers: {
          'X-RapidAPI-Key': '464062bea2mshae4f7e966bfe8d6p1e7bc1jsna9b9c71b4ad2',
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }

  })
  .then((response) => {
    const newGames = response.data.response
      .filter((fixture) => {
        const fixtureDate = new Date(fixture.fixture.date);
        const now = new Date();
        const sevenDaysFromNow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7);
        return fixtureDate >= now && fixtureDate <= sevenDaysFromNow;
      })
      .map((fixture) => {
        return {
          homeTeam: fixture.teams.home.name,
          awayTeam: fixture.teams.away.name,
          homeScore: fixture.goals.home,
          awayScore: fixture.goals.away,
        };
      });
    setGames([...games, ...newGames]);
    setLoading(false);
  })
  .catch((error) => {
    console.error(error);
    setLoading(false);
  });
};

return (
<div className={styles.container}>
<div className={styles.nextFixture}>
<h2>Next Fixture</h2>
{nextFixture ? (
<p>
{nextFixture.homeTeam} - {nextFixture.awayTeam}, {nextFixture.kickoffTime}
</p>
) : (
<p>No fixtures found</p>
)}
</div>
<div className={styles.gameList}>
<h2>Upcoming Games</h2>
{fixturesLoading ? (
<p>Loading...</p>
) : (
<>
{games.map((game, index) => (
<div className={styles.gameCard} key={index}>
<p className={styles.teamNames}>
{game.homeTeam} - {game.awayTeam}
</p>
{game.homeScore !== null && game.awayScore !== null ? (
<p className={styles.score}>
{game.homeScore} - {game.awayScore}
</p>
) : (
<p className={styles.vs}></p>
)}
</div>
))}
{loading ? (
<p>Loading...</p>
) : (
<button className={styles.loadMoreButton} onClick={loadMoreGames}>
Load More
</button>
)}
</>
)}
</div>
</div>
);
};

export default GameList;




