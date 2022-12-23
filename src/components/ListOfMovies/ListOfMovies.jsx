import { Link } from 'react-router-dom';

export const ListOfMovies = ({ films }) => {
  return (
    <ul>
      {films.map(({ title, id }) => {
        return (
          <Link to={`${id}`} key={id}>
            <li>{title}</li>
          </Link>
        );
      })}
    </ul>
  );
};
