import { useEffect } from 'react';
import { getMovieCast } from 'API/MovieDB';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, [movieId]);

  const photoUrl = `https://image.tmdb.org/t/p/original`;

  return (
    <div>
      <ul>
        {cast.map(actor => {
          const { character, name, id, profile_path } = actor;
          return (
            <li key={id}>
              {` ${name} as ${character}`}
              <img
                src={`${photoUrl}${profile_path}`}
                alt={name}
                width="50"
              ></img>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
