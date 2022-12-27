import { getMovieByKey } from 'API/MovieDB';
import { useEffect, useState } from 'react';
import { ListOfMovies } from 'components/ListOfMovies/ListOfMovies';
import { NotFound } from 'components/NotFound/NotFound';
import { Loader } from 'components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm/SearchForm';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [params, setParams] = useSearchParams();

  const query = params.get('query') ?? '';

  useEffect(() => {
    const isQuerySet = query !== '';
    if (isQuerySet) {
      setIsLoading(true);
      setError(null);
      setFilms([]);
      getMovieByKey(query)
        .then(data => {
          if (data.length === 0) {
            setError(true);
          } else {
            setFilms(data);
          }
        })
        .finally(() => setIsLoading(false));
    }
  }, [query]);

  function onSubmit(evt) {
    evt.preventDefault();
    const currentQuery = evt.currentTarget.elements.query.value;
    setParams(currentQuery !== '' ? { query: currentQuery } : '');
    evt.currentTarget.reset();
  }

  return (
    <>
      <SearchForm
        onSubmit={onSubmit}
        value={params.get('query') ?? ''}
      ></SearchForm>
      {isLoading && <Loader></Loader>}
      {error !== null && <NotFound></NotFound>}
      {films.length > 0 && <ListOfMovies films={films}></ListOfMovies>}
    </>
  );
};

export default Movies;
