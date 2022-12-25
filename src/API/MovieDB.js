import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'ebab474729c7a7a042d3e1e294ace7e8';

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}trending/movie/day?api_key=${KEY}`
    );
    return response.data.results;
  } catch (error) {
   console.error('Sorry, something went wrong!');
  }
};

export const getMovieByKey = async query => {
  const normalizedQuery = query.trim().toLowerCase();
  try {
    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${KEY}&query=${normalizedQuery}&page=1&include_adult=false`
    );
    return response.data.results;
  } catch (error) {
   console.error('Sorry, something went wrong!');
  }
};

export const getMoviebyId = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${id}?api_key=${KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
   console.error('Sorry, something went wrong!');
  }
};

export const getMovieCast = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${id}/credits?api_key=${KEY}&language=en-US`
    );
    return response.data.cast;
  } catch (error) {
   console.error('Sorry, something went wrong!');
  }
};

export const getMovieReviews = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
    );
    return response.data.results;
  } catch (error) {
   console.error('Sorry, something went wrong!');
  }
};
