import React, { useState, MouseEvent } from 'react';
import { reviews } from '../../mocks/reviews';
import { FilmType } from '../../types/films';
import FilmDetails from './film-details';
import FilmOverview from './film-overview';
import FilmReviews from './film-reviews';

type TabsListProps = {
  currentFilm: FilmType;
}

function TabsList({ currentFilm }: TabsListProps): JSX.Element {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabsArray = ['Overview', 'Details', 'Reviews'];

  const getActiveTab = () => {
    switch (activeTab) {
      case 'Overview':
        return <FilmOverview film={currentFilm} />;
      case 'Details':
        return <FilmDetails film={currentFilm} />;
      case 'Reviews':
        return <FilmReviews reviews={reviews} />;
      default:
        return <FilmOverview film={currentFilm} />;
    }
  };

  const handleTabClick = (evt: MouseEvent<HTMLLIElement>) => {
    setActiveTab(evt.currentTarget.innerText);
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabsArray.map((tab) => (
            <li
              className={`film-nav__item ${
                activeTab === tab ? 'film-nav__item--active' : ''
              }`}
              key={tab}
              onClick={handleTabClick}
            >
              {tab && <span className="film-nav__link">{tab}</span>}
            </li>
          ))}
        </ul>
      </nav>

      {getActiveTab()}
    </div>
  );
}

export default TabsList;
