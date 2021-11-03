import React, { useState, MouseEvent } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
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
  const [activeTab, setActiveTab] = useState('Overview');

  const handleActiveTabClick = (evt: MouseEvent<HTMLLIElement>) => {
    setActiveTab(evt.currentTarget.innerText);
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li
            className={`film-nav__item ${
              activeTab === 'Overview' ? 'film-nav__item--active' : ''
            }`}
            onClick={handleActiveTabClick}
          >
            <Link to={url} className="film-nav__link">
              Overview
            </Link>
          </li>
          <li
            className={`film-nav__item ${
              activeTab === 'Details' ? 'film-nav__item--active' : ''
            }`}
            onClick={handleActiveTabClick}
          >
            <Link to={`${url}/details`} className="film-nav__link">
              Details
            </Link>
          </li>
          <li
            className={`film-nav__item ${
              activeTab === 'Reviews' ? 'film-nav__item--active' : ''
            }`}
            onClick={handleActiveTabClick}
          >
            <Link to={`${url}/reviews`} className="film-nav__link">
              Reviews
            </Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path={path}>
          <FilmOverview film={currentFilm} />
        </Route>
        <Route exact path={`${path}/details`}>
          <FilmDetails film={currentFilm} />
        </Route>
        <Route exact path={`${path}/reviews`}>
          <FilmReviews reviews={reviews} />
        </Route>
      </Switch>
    </div>
  );
}

export default TabsList;
