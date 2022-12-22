import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = 'ebab474729c7a7a042d3e1e294ace7e8';

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${KEY}`
    );
    return response.data.results;
  } catch (error) {
    throw new Error('Sorry, something went wrong!');
  }
};
