import { StyledImage } from './NotFound.styled';

export const NotFound = () => {
  return (
    <div>
      <h3>Sorry, your request was not successful</h3>
      <StyledImage src="error-pic.jpg" alt="not found"></StyledImage>
    </div>
  );
};
