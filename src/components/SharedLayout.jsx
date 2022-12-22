import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
