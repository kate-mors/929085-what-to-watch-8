import React, { useState } from 'react';
import FilmsList from '../films-list/films-list';
import { FilmsType } from '../../types/films';
import { Link, useHistory } from 'react-router-dom';
import { AppRoute, SHOWED_FILMS_NUMBER } from '../../utils/const';
import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { changeGenre as changeGenreState } from '../../store/actions';
import { State } from '../../types/state';
import Genres from '../genres/genres';
import ShowMoreButton from '../show-more/show-more';

type MainScreenProps = {
  films: FilmsType;
};

const mapStateToProps = ({ filteredFilms }: State) => ({
  filteredFilms,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  onChangeGenre: changeGenreState,
}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MainScreenProps;

function MainPage(props: ConnectedComponentProps): JSX.Element {
  const { films, filteredFilms } = props;
  const history = useHistory();
  const [displayedFilms, setdisplayedFilms] = useState(filteredFilms.slice(0, SHOWED_FILMS_NUMBER));

  let counter = 0;

  const handleShowMoreClick = () => {
    counter += SHOWED_FILMS_NUMBER;
    setdisplayedFilms(displayedFilms.concat(filteredFilms.slice(counter, counter + SHOWED_FILMS_NUMBER)));
  };

  const [film] = films;

  return (
    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={film.background_image} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <Link className="logo__link" to={AppRoute.Main}>
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
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={film.poster_image}
                alt={film.name}
                width="218"
                height="327"
              />
            </div>

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
                  onClick={() => {
                    history.push(`player/${film.id}`);
                  }}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                  onClick={() => {
                    history.push(AppRoute.MyList);
                  }}
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <Genres films={films} />
          <FilmsList films={displayedFilms} />

          {filteredFilms.length > SHOWED_FILMS_NUMBER && displayedFilms.length < filteredFilms.length ?
            <ShowMoreButton
              onClick={handleShowMoreClick}
            />
            : ''}

        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link className="logo__link logo__link--light" to={AppRoute.Main}>
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
    </React.Fragment>
  );
}

export { MainPage };
export default connector(MainPage);
