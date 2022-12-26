import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const ImageThumb = styled.div`
  width: 340px;
  height: auto;
  padding: 10px 20px;
  object-fit: cover;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 500px 700px;
  justify-items: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ExtraDetailsWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  height: 40px;
  border-radius: 3px;
`;

export const LinkForAddons = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 64px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  color: white;
  font-weight: 700;
  background-color: #457b9d;
  padding: 10px 20px;
  border-radius: 3px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  &.active {
    background-color: #1d3557;
  }
`;

export const BackMoviesLink = styled(Link)`
  display: inline-block;
  position: absolute;
  top: 10px;
  left: 15px;
  padding: 10px;
  border-radius: 3px;
  text-decoration: none;
  cursor: pointer;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  color: #d5bdaf;
  width: fit-content;
  &:hover,
  &:focus {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

export const Container = styled.div`
  padding: 20px;
`;
