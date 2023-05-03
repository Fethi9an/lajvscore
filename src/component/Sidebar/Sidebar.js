import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Sidebar.module.css'
const STANDINGS_API_URL = 'https://api-football-v1.p.rapidapi.com/v3/standings';

const SideBar = () => {
  const [standings, setStandings] = useState([]);
  const [standingsLoading, setStandingsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const response = await axios.get(STANDINGS_API_URL, {
          params: { league: '39', season: '2022' },
          headers: {
            'X-RapidAPI-Key': '464062bea2mshae4f7e966bfe8d6p1e7bc1jsna9b9c71b4ad2',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
          }
        });
        setStandings(response.data.response[0].league.standings[0]);
        setStandingsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStandings();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button className={styles.sidebarToggle} onClick={toggleSidebar}>
        {isSidebarOpen ? 'Standings' : 'X'}
      </button>
      <div className={`${styles.container} ${isSidebarOpen ? styles.open : styles.closed}`}>
        <div className={styles.standings}>
          <h2>Standings</h2>
          {standingsLoading ? (
            <p>Loading standings...</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Pos</th>
                  <th>Team</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                {standings.map((team, index) => (
                  <tr key={index}>
                    <td>{team.rank}</td>
                    <td>{team.team.name}</td>
                    <td>{team.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default SideBar;
