import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useLocation, useParams, Link } from 'react-router-dom';
import { getMoviebyId } from 'API/MovieDB';
import {
  ExtraDetailsWrap,
  ImageThumb,
  TextWrapper,
  Wrapper,
} from './MovieDetails.styled';
import { LinkForAddons } from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  ///fetch by movieId
  useEffect(() => {
    getMoviebyId(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }
  const { poster_path, genres, title, overview, vote_average, release_date } =
    movie;

  const poster = `https://image.tmdb.org/t/p/w342${poster_path}`;
  const backLink = location.state?.from ?? '/';

  return (
    <>
      <Link to={backLink}>Back to movies</Link>
      <Wrapper>
        <ImageThumb>
          <img src={poster} alt={title}></img>
        </ImageThumb>
        <TextWrapper>
          <h2>{title}</h2>
          <p>{release_date}</p>
          <p>{`User Score: ${vote_average.toFixed(1) * 10}%`}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
          <b>Additional information</b>
          <ExtraDetailsWrap>
            <LinkForAddons to="cast" state={{ from: backLink }}>
              Cast
            </LinkForAddons>
            <LinkForAddons to="reviews" state={{ from: backLink }}>
              Reviews
            </LinkForAddons>
          </ExtraDetailsWrap>
        </TextWrapper>
      </Wrapper>
      <Outlet></Outlet>
    </>
  );
};
