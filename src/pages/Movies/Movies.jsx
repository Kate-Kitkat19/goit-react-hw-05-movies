import { getMovieByKey } from 'API/MovieDB';
import { useState } from 'react';
import { ListOfMovies } from 'components/ListOfMovies/ListOfMovies';
import { NotFound } from 'components/NotFound/NotFound';
import { Loader } from 'components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect } from 'react';

export const Movies = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [params, setParams] = useSearchParams();


  function updateQuery(evt) {
    setParams(evt.target.value !== '' ? { query: evt.target.value } : {});
  }

  async function onSubmit(evt) {
    setIsLoading(true);
    setError(null);
    evt.preventDefault();
    const query = params.get('query') ?? '';
    getMovieByKey(query)
      .then(data => {
        if (data.length === 0) {
          setError(true);
        } else {
          setFilms(data);
        }
      })
      .finally(() => setIsLoading(false));
    evt.currentTarget.reset();
  }

  return (
    <>
      <SearchForm
        onSubmit={onSubmit}
        value={params.get('query') ?? ''}
        onChange={updateQuery}
      ></SearchForm>
      {isLoading && <Loader></Loader>}
      {error !== null && <NotFound></NotFound>}
      {films.length > 0 && <ListOfMovies films={films}></ListOfMovies>}
    </>
  );
};
