import React from 'react';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import { reviews } from '../../mocks/reviews';
import { FilmType } from '../../types/films';
import FilmDetails from './details';
import FilmOverview from './overview';
import FilmReviews from './reviews';

type TabsListProps = {
  currentFilm: FilmType;
}

function TabsList({ currentFilm }: TabsListProps): JSX.Element {
  const { path, url } = useRouteMatch();

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item">
            <NavLink
              exact
              to={url}
              className="film-nav__item film-nav__link"
              activeClassName="film-nav__item--active"
            >
              Overview
            </NavLink>
          </li>
          <li className="film-nav__item">
            <NavLink
              exact
              to={`${url}/details`}
              className="film-nav__item film-nav__link"
              activeClassName="film-nav__item--active"
            >
              Details
            </NavLink>
          </li>
          <li className="film-nav__item">
            <NavLink
              exact
              to={`${url}/reviews`}
              className="film-nav__item film-nav__link"
              activeClassName="film-nav__item--active"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path={path}>
          <FilmOverview film={currentFilm} />;
        </Route>
        <Route exact path={`${path}/details`}>
          <FilmDetails film={currentFilm} />;
        </Route>
        <Route exact path={`${path}/reviews`}>
          <FilmReviews reviews={reviews} />;
        </Route>
      </Switch>
    </div>
  );
}

export default TabsList;
