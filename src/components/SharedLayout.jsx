import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { MOCK_Data } from './Product';

export const SharedLayout = () => {
  const [params, setParams] = useSearchParams();
  const name = params.get('name') ?? '';

  function onSubmit(evt) {
    evt.preventDefault();
    const qwery = params.get('name');
   
    const normalizedQwery = qwery.toLowerCase();
    const filteredResilts = searchPersonByName(normalizedQwery);
    console.log('onSubmit   filteredResilts', filteredResilts);
  }

  function searchPersonByName(name) {
    const filtered = MOCK_Data.filter(
      person =>
        person.first_name.toLowerCase().includes(name) ||
        person.last_name.toLowerCase().includes(name)
    );
    return filtered;
  }

  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/product">Product</NavLink>
        </nav>
      </header>
      <form onSubmit={onSubmit}>
        <label>
          Please write your query
          <input
            type="text"
            value={name}
            name="qwery"
            onChange={evt => setParams({ name: evt.target.value })}
          ></input>
        </label>
        <button type="submit">Submit</button>
      </form>
      <Outlet />
    </>
  );
};
