import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMoviebyId } from 'API/MovieDB';
import { ImageThumb } from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  ///fetch by movieId
  useEffect(() => {
    console.log(movieId);
    getMoviebyId(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }
  const { poster_path, genres, title, overview, vote_average, release_date } =
    movie;

  const poster = `https://image.tmdb.org/t/p/original${poster_path}`;
  const backLink = location.state?.from ?? '/';

  return (
    <div>
      <Link to={backLink}>Back to movies</Link>
      <ImageThumb>
        <img src={poster} alt={title}></img>
      </ImageThumb>
      <h2>{title}</h2>
      <p>{release_date}</p>
      <p>{`User Score: ${vote_average.toFixed(1) * 10}%`}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres.map(genre => genre.name).join(', ')}</p>
      <b>Additional information</b>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet></Outlet>
    </div>
  );
};
