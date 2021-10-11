import React from 'react';
import { Films } from '../../types/films';

type MyListProps = {
  films: Films
}

function MyList({ films }: MyListProps): JSX.Element {
  const [film] = films;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

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

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

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
              <a className="small-film-card__link" href="film-page.html">
                {film.name}
              </a>
            </h3>
          </article>
          )


        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyList;
