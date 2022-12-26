import { useEffect } from 'react';
import { getMovieCast } from 'API/MovieDB';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Item, StyledCastList, StyledPhoto } from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, [movieId]);

  const photoUrl = `https://image.tmdb.org/t/p/original`;

  return (
    <div>
      <StyledCastList>
        {cast.map(actor => {
          const { character, name, id, profile_path } = actor;
          const photo =
            profile_path !== null
              ? `${photoUrl}${profile_path}`
              : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';
          return (
            <Item key={id}>
              <StyledPhoto
                src={`${photo}`}
                alt={name}
                width="150"
              ></StyledPhoto>
              {` ${name} as ${character}`}
            </Item>
          );
        })}
      </StyledCastList>
    </div>
  );
};
