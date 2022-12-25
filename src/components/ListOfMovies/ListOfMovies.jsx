import { Link, useLocation } from 'react-router-dom';

export const ListOfMovies = ({ films }) => {
  const location = useLocation();
  console.log(location);
  return (
    <ul>
      {films.map(({ title, id: movieId }) => {
        return (
          <Link to={`${movieId}`} state={{ from: location }} key={movieId}>
            <li>{title}</li>
          </Link>
        );
      })}
    </ul>
  );
};
