import { Link } from 'react-router-dom';

export const Person = ({ data }) => {
  return (
    <div>
      <Link to={`${data.id}`}>
        <h2>
          {' '}
          {data.first_name} {data.last_name}
        </h2>
      </Link>

      <p>{data.email} </p>
      <p>{data.gender}</p>
    </div>
  );
};
