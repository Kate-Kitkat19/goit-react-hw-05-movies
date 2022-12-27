import { Route, Routes } from 'react-router-dom';
import React, { lazy } from 'react';

const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

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
