import React from 'react';
import { FilmType } from '../../types/films';
import { getRatingLevel } from '../../utils/utils';

type FilmOverviewProps = {
  film: FilmType;
};

function FilmOverview({ film }: FilmOverviewProps): JSX.Element {

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">
            {getRatingLevel(film.rating)}
          </span>
          <span className="film-rating__count">
            {film.scores_count} ratings
          </span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director">
          <strong>Director: {film.director.join(', ')}</strong>
        </p>

        <p className="film-card__starring">
          <strong>Starring: {film.starring.slice(0, 3).join(', ')}</strong>
        </p>
      </div>
    </>
  );
}

export default FilmOverview;
