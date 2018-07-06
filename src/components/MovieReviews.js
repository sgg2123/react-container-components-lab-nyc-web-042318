import React from 'react';

const MovieReviews = props => {

  const reviewList = props.reviews.map(review => {
    return (
      <div className="review">
        <h1>Title: {review.display_title}</h1>
        <h2>By: {review.byline}</h2>
        <h3>{review.headline}</h3>
      </div>
    );
  });

  return (
    <div className="review-list">
      {reviewList}
    </div>
  );

};

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
