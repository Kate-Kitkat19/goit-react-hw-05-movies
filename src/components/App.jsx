import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout></SharedLayout>}>
        <Route index element={<Home></Home>} />
        <Route path="movies" element={<Movies></Movies>} />
        <Route path="*" element={<Home></Home>} />
      </Route>
    </Routes>
  );
};
