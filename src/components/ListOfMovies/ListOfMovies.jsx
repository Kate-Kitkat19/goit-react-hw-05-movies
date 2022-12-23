import { Link } from 'react-router-dom';

export const ListOfMovies = ({ films }) => {
  return (
    <ul>
      {films.map(({ title, id: movieId }) => {
        return (
          <Link to={`${movieId}`} key={movieId}>
            <li>{title}</li>
          </Link>
        );
      })}
    </ul>
  );
};
