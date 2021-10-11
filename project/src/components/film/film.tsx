import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Films } from '../../types/films';
import { Reviews } from '../../types/reviews';
import AddReview from '../add-review/add-review';

type FilmProps = {
  films: Films,
  reviews: Reviews,
}

function Film({ films, reviews }: FilmProps): JSX.Element {
  const [film] = films;
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.background_image} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <Link to={AppRoute.Main} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img
                    src="img/avatar.jpg"
                    alt="User avatar"
                    width="63"
                    height="63"
                  />
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={AppRoute.AddReview} className="btn film-card__button">
                  <AddReview films={films} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={film.poster_image}
                alt={film.name}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item">
                    <a className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item film-nav__item--active">
                    <a className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-card__reviews film-card__row">
                <div className="film-card__reviews-col">
                  {reviews.map((review) => (
                    <div className="review" key={review.id}>
                      <blockquote className="review__quote">
                        <p className="review__text">
                          {review.comment}
                        </p>

                        <footer className="review__details">
                          <cite className="review__author">{review.user.name}</cite>
                          <time className="review__date" dateTime="2016-12-24">
                            {review.date}
                          </time>
                        </footer>
                      </blockquote>

                      <div className="review__rating">{review.rating}</div>
                    </div>
                  ))}
                </div>
                <div className="film-card__reviews-col">
                  {reviews.map((review) => (
                    <div className="review" key={review.id}>
                      <blockquote className="review__quote">
                        <p className="review__text">
                          {review.comment}
                        </p>

                        <footer className="review__details">
                          <cite className="review__author">{review.user.name}</cite>
                          <time className="review__date" dateTime="2016-12-24">
                            {review.date}
                          </time>
                        </footer>
                      </blockquote>

                      <div className="review__rating">{review.rating}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            if ({film.is_favorite})(
            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img
                  src={film.preview_image}
                  alt={film.name}
                  width="280"
                  height="175"
                />
              </div>
              <h3 className="small-film-card__title">
                <Link
                  className="small-film-card__link"
                  to={`${AppRoute.Film}/${film.id}`}
                >
                  {film.name}
                </Link>
              </h3>
            </article>
            )
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to={AppRoute.Main} className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Film;
