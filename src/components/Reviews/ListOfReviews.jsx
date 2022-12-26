import { ReviewsList } from './Reviews.styled';
import PropTypes from 'prop-types';

export const ListOfReviews = ({ reviews }) => {
  return (
    <ReviewsList>
      {reviews.map(review => {
        const { author, content, id } = review;
        return (
          <li key={id}>
            <p>{`Author: ${author}`}</p>
            <p>{content}</p>
          </li>
        );
      })}
    </ReviewsList>
  );
};

ListOfReviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
