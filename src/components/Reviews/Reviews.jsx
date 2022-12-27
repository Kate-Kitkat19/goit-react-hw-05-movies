import { getMovieReviews } from 'API/MovieDB';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ListOfReviews } from './ListOfReviews';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ListOfReviews reviews={reviews} />
      ) : (
        <p>There are no reviews</p>
      )}
    </div>
  );
};

export default Reviews;
