import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Films } from '../../types/films';
import AddReview from '../add-review/add-review';

type FilmProps = {
  films: Films
}

function Film({ films }: FilmProps): JSX.Element {
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
                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">
                        Discerning travellers and Wes Anderson fans will
                        luxuriate in the glorious Mittel-European kitsch of one
                        of the director&apos;s funniest and most exquisitely
                        designed films in years.
                      </p>

                      <footer className="review__details">
                        <cite className="review__author">Kate Muir</cite>
                        <time className="review__date" dateTime="2016-12-24">
                          December 24, 2016
                        </time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">8,9</div>
                  </div>

                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">
                        Anderson&apos;s films are too precious for some, but for
                        those of us willing to lose ourselves in them,
                        they&apos;re a delight. &quot;The Grand Budapest
                        Hotel&quot; is no different, except that he has added a
                        hint of gravitas to the mix, improving the recipe.
                      </p>

                      <footer className="review__details">
                        <cite className="review__author">Bill Goodykoontz</cite>
                        <time className="review__date" dateTime="2015-11-18">
                          November 18, 2015
                        </time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">8,0</div>
                  </div>

                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">
                        I didn&apos;t find it amusing, and while I can
                        appreciate the creativity, it&apos;s an hour and 40
                        minutes I wish I could take back.
                      </p>

                      <footer className="review__details">
                        <cite className="review__author">Amanda Greever</cite>
                        <time className="review__date" dateTime="2015-11-18">
                          November 18, 2015
                        </time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">8,0</div>
                  </div>
                </div>
                <div className="film-card__reviews-col">
                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">
                        The mannered, madcap proceedings are often delightful,
                        occasionally silly, and here and there, gruesome and/or
                        heartbreaking.
                      </p>

                      <footer className="review__details">
                        <cite className="review__author">Matthew Lickona</cite>
                        <time className="review__date" dateTime="2016-12-20">
                          December 20, 2016
                        </time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">7,2</div>
                  </div>

                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">
                        It is certainly a magical and childlike way of
                        storytelling, even if the content is a little more
                        adult.
                      </p>

                      <footer className="review__details">
                        <cite className="review__author">
                          Paula Fleri-Soler
                        </cite>
                        <time className="review__date" dateTime="2016-12-20">
                          December 20, 2016
                        </time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">7,6</div>
                  </div>

                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">
                        It is certainly a magical and childlike way of
                        storytelling, even if the content is a little more
                        adult.
                      </p>

                      <footer className="review__details">
                        <cite className="review__author">
                          Paula Fleri-Soler
                        </cite>
                        <time className="review__date" dateTime="2016-12-20">
                          December 20, 2016
                        </time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">7,0</div>
                  </div>
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
