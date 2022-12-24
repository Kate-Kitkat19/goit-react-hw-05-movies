export const ListOfReviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(review => {
        const { author, content, id } = review;
        return (
          <li key={id}>
            <p>{`Author: ${author}`}</p>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};
