import { Form, SearchBtn, StyledInput } from './SearchForm.styled';
import PropTypes from 'prop-types';

export const SearchForm = ({ onSubmit, value }) => {
  return (
    <Form onSubmit={onSubmit}>
      <StyledInput
        type="text"
        placeholder="What you`re looking for?"
        name="query"
        defaultValue={value}
      ></StyledInput>
      <SearchBtn type="submit" >
        Search
      </SearchBtn>
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  
};
