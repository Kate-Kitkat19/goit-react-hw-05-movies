import { Outlet } from 'react-router-dom';
import React, { Suspense } from 'react';
import {
  ContentWrap,
  Navigation,
  NavigationLink,
  StyledHeader,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <StyledHeader>
        <Navigation>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/movies">Movies</NavigationLink>
        </Navigation>
      </StyledHeader>
      <ContentWrap>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </ContentWrap>
    </>
  );
};

export default SharedLayout;
