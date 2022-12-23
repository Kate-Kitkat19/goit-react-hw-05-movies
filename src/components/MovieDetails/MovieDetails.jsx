import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  ///fetch by movieId
  useEffect(() => {
    console.log(movieId);
    setMovie(1);
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <div>
      This is movie details page
      <Outlet></Outlet>
    </div>
  );
};
