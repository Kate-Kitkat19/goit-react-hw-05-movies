import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout></SharedLayout>}>
        <Route index element={<Home></Home>} />
        <Route path="movies" element={<Movies></Movies>} />
        <Route path="movies/:movieId" element={<MovieDetails></MovieDetails>}>
          <Route path="cast" element={<Cast></Cast>} />
          <Route path="reviews" element={<Reviews></Reviews>} />
        </Route>
        <Route path="*" element={<Home></Home>} />
      </Route>
    </Routes>
  );
};
