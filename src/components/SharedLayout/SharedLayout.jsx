import { Outlet } from 'react-router-dom';
import {
  ContentWrap,
  Navigation,
  NavigationLink,
  StyledHeader,
} from './SharedLayout.styled';


export const SharedLayout = () => {
  return (
    <>
      <StyledHeader>
        <Navigation>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/movies">Movies</NavigationLink>
        </Navigation>
      </StyledHeader>
      <ContentWrap>
        <Outlet />
      </ContentWrap>
    </>
  );
};
