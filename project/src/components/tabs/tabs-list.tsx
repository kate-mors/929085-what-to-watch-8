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
  const [activeTab, setActiveTab] = useState(0);

  const tabsArray = [
    { id: 0, name: 'Overview' },
    { id: 1, name: 'Details' },
    { id: 2, name: 'Reviews' },
  ];

  const getActiveTab = () => {
    switch (activeTab) {
      case 0:
        return <FilmOverview film={currentFilm} />;
      case 1:
        return <FilmDetails film={currentFilm} />;
      case 2:
        return <FilmReviews reviews={reviews} />;
      default:
        return ['Error'];
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabsArray.map((tab, index) => (
            <li
              className={`film-nav__item ${
                activeTab === index ? 'film-nav__item--active' : ''
              }`}
              key={tab.id}
              onClick={(evt: MouseEvent<HTMLLIElement>) => {
                setActiveTab(index);
              }}
            >
              {tab.name && <span className="film-nav__link">{tab.name}</span>}
            </li>
          ))}
        </ul>
      </nav>

      {getActiveTab()}
    </div>
  );
}

export default TabsList;
