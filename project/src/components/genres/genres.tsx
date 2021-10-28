import React from 'react';
import { FilmsType } from '../../types/films';
import { DEFAULT_GENRE } from '../../utils/const';

type GenresProps = {
  films: FilmsType,
  genres: string,
  onGenreClick: (genre: string) => void,
}

function Genres({ films, genres, onGenreClick }: GenresProps): JSX.Element {

  const genresList = films.map((film) => film.genre);
  const genresArray = Array.from(new Set([DEFAULT_GENRE, ...genresList]));

  return (
    <ul className="catalog__genres-list">
      {genresArray.map((genreItem) => (
        <li
          className={`catalog__genres-item ${
            genres === genreItem || genres === DEFAULT_GENRE
              ? 'catalog__genres-item--active'
              : ''
          }`}
          key={genreItem}
          onClick={() => onGenreClick(genreItem)}
        >
          <span className="catalog__genres-link">{genreItem}</span>
        </li>
      ))}
    </ul>
  );
}

export default Genres;
