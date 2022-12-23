import { getTrendingMovies } from 'API/MovieDB';
import { useState } from 'react';
import { useEffect } from 'react';
import { ListOfMovies } from 'components/ListOfMovies/ListOfMovies';

export const Home = () => {
  const [films, setFilms] = useState([]);

  async function getTrends() {
    const films = await getTrendingMovies();
    return films;
  }

  useEffect(() => {
    getTrends().then(data => setFilms(data));
  }, []);

  return (
    <div>
      <h2>Thending today</h2>
      <ListOfMovies films={films}></ListOfMovies>
    </div>
  );
};
