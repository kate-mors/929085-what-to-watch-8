import React from 'react';
import { ReviewsType } from '../../types/reviews';

type FilmReviewsProps = {
  reviews: ReviewsType;
};

function FilmReviews({ reviews }: FilmReviewsProps): JSX.Element {
  const [review] = reviews;

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">
              {review.comment}
            </p>

            <footer className="review__details">
              <cite className="review__author">{review.user}</cite>
              <time className="review__date" dateTime="2016-12-24">
                {review.date}
              </time>
            </footer>
          </blockquote>

          <div className="review__rating">{review.rating}</div>
        </div>
      </div>
      <div className="film-card__reviews-col">
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">
              {review.comment}
            </p>

            <footer className="review__details">
              <cite className="review__author">{review.user}</cite>
              <time className="review__date" dateTime="2016-12-20">
                {review.date}
              </time>
            </footer>
          </blockquote>

          <div className="review__rating">{review.rating}</div>
        </div>
      </div>
    </div>
  );
}

export default FilmReviews;
