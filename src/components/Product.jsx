import { Person } from './Person';

export const MOCK_Data = [
  {
    id: 1,
    first_name: 'Fran',
    last_name: 'Mulholland',
    email: 'fmulholland0@123-reg.co.uk',
    gender: 'Female',
    ip_address: '26.69.52.86',
  },
  {
    id: 2,
    first_name: 'Tedra',
    last_name: 'Faircliff',
    email: 'tfaircliff1@tumblr.com',
    gender: 'Female',
    ip_address: '59.44.64.174',
  },
  {
    id: 3,
    first_name: 'Ogdon',
    last_name: 'Alvis',
    email: 'oalvis2@aol.com',
    gender: 'Male',
    ip_address: '24.5.203.134',
  },
  {
    id: 4,
    first_name: 'Keir',
    last_name: 'Redley',
    email: 'kredley3@guardian.co.uk',
    gender: 'Male',
    ip_address: '219.70.149.236',
  },
  {
    id: 5,
    first_name: 'Lucilia',
    last_name: 'Gocke',
    email: 'lgocke4@w3.org',
    gender: 'Female',
    ip_address: '70.173.9.79',
  },
  {
    id: 6,
    first_name: 'Saleem',
    last_name: 'MacGhee',
    email: 'smacghee5@sciencedirect.com',
    gender: 'Male',
    ip_address: '16.49.198.127',
  },
  {
    id: 7,
    first_name: 'Georgena',
    last_name: 'Horche',
    email: 'ghorche6@histats.com',
    gender: 'Female',
    ip_address: '161.88.203.189',
  },
  {
    id: 8,
    first_name: 'Lorinda',
    last_name: 'Cowill',
    email: 'lcowill7@blinklist.com',
    gender: 'Female',
    ip_address: '247.238.241.127',
  },
  {
    id: 9,
    first_name: 'Davita',
    last_name: 'Lattin',
    email: 'dlattin8@bloglines.com',
    gender: 'Female',
    ip_address: '200.95.209.235',
  },
  {
    id: 10,
    first_name: 'Mignon',
    last_name: 'Sara',
    email: 'msara9@1und1.de',
    gender: 'Female',
    ip_address: '107.121.30.74',
  },
];

export const Product = () => {
  return (
    <>
      <ul>
        {MOCK_Data.map(person => {
          return (
            <li key={person.id}>
              <Person data={person}></Person>
            </li>
          );
        })}
      </ul>
    </>
  );
};
