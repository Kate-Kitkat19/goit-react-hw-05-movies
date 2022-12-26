import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Title = styled.h2`
  font-size: 35px;
  margin: 0;
  padding: 0;
  color: #1d3557;
  font-family: 'Crimson Text', serif;
`;

export const MoviesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #1d3557;
  font-size: 20px;
  &:visited {
    color: #1d3557;
  }
  &:hover,
  &:focus {
    color: #14213d;
  }
`;
