import React from 'react';
import { ReviewsType } from '../../types/reviews';
import { convertReviewDate, getTimeAtribute } from '../../utils/utils';

type FilmReviewsProps = {
  reviews: ReviewsType;
};

function FilmReviews({ reviews }: FilmReviewsProps): JSX.Element {

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.slice(0, 2).map((review) => (
          <div className="review" key={review.id}>
            <blockquote className="review__quote">
              <p className="review__text">{review.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{review.user}</cite>
                <time
                  className="review__date"
                  dateTime={getTimeAtribute(review.date)}
                >
                  {convertReviewDate(review.date)}
                </time>
              </footer>
            </blockquote>

            <div className="review__rating">{review.rating}</div>
          </div>
        ))}
      </div>
      <div className="film-card__reviews-col">
        {reviews.slice(3).map((review) => (
          <div className="review" key={review.id}>
            <blockquote className="review__quote">
              <p className="review__text">{review.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{review.user}</cite>
                <time
                  className="review__date"
                  dateTime={getTimeAtribute(review.date)}
                >
                  {convertReviewDate(review.date)}
                </time>
              </footer>
            </blockquote>

            <div className="review__rating">{review.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilmReviews;
