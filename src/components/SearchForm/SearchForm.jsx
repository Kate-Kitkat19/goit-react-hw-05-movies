export const SearchForm = ({ onSubmit, value, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <button type="submit">Search</button>
      <input
        type="text"
        placeholder="What you`re looking for?"
        name="query"
        value={value}
        onChange={evt => {
          onChange(evt);
        }}
      ></input>
    </form>
  );
};
