import { HomePage } from 'pages/Home/Home';
import { About } from 'pages/About/About';
import { NotFound } from 'pages/NotFound/NotFound';
import { Product } from './Product';
import { DetailedInfo } from './DetailedInfo';
import { Routes, Route, useLocation } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { useEffect } from 'react';

export const App = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />} />
          <Route path="product/:id" element={<DetailedInfo></DetailedInfo>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
