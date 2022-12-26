import { Form, SearchBtn, StyledInput } from './SearchForm.styled';
import PropTypes from 'prop-types';

export const SearchForm = ({ onSubmit, value, onChange }) => {
  return (
    <Form onSubmit={onSubmit}>
      <StyledInput
        type="text"
        placeholder="What you`re looking for?"
        name="query"
        value={value}
        onChange={evt => {
          onChange(evt);
        }}
      ></StyledInput>
      <SearchBtn type="submit" disabled={value === ''}>
        Search
      </SearchBtn>
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
