import styled from 'styled-components';

export const StyledCastList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-basis: calc(33% - 5px);
`;

export const StyledPhoto = styled.img`
  display: block;
  border-radius: 3px;
`;
