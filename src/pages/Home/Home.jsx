import { getTrendingMovies } from 'API/MovieDB';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MoviesList, StyledLink, Title } from './Home.styled';

const Home = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  async function getTrends() {
    const films = await getTrendingMovies();
    return films;
  }

  useEffect(() => {
    getTrends().then(data => setFilms(data));
  }, []);

  return (
    <div>
      <Title>Thending today</Title>
      <MoviesList>
        {films.map(({ title, id: movieId }) => {
          return (
            <StyledLink
              to={`movies/${movieId}`}
              state={{ from: location }}
              key={movieId}
            >
              <li>{title}</li>
            </StyledLink>
          );
        })}
      </MoviesList>
    </div>
  );
};

export default Home;
