import { useLocation } from 'react-router-dom';
import { MoviesList, StyledLink } from 'pages/Home/Home.styled';
import PropTypes from 'prop-types';

export const ListOfMovies = ({ films }) => {
  const location = useLocation();
  
  return (
    <MoviesList>
      {films.map(({ title, id: movieId }) => {
        return (
          <StyledLink
            to={`${movieId}`}
            state={{ from: location }}
            key={movieId}
          >
            <li>{title}</li>
          </StyledLink>
        );
      })}
    </MoviesList>
  );
};

ListOfMovies.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
