import { useParams } from 'react-router-dom';
import { MOCK_Data } from './Product';

export const DetailedInfo = () => {
  const { id } = useParams();

  const dataForPerson = findNeededPerson(Number(id));
  return (
    <div>
      THIS IS IT!!!!
      <p>{dataForPerson.email}</p>
      <p>{dataForPerson.gender}</p>
    </div>
  );
};

function findNeededPerson(id) {
  return MOCK_Data.find(person => person.id === id);
}
