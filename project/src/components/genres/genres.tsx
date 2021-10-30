import React, { useState, MouseEvent } from 'react';
import { FilmsType } from '../../types/films';
import { DEFAULT_GENRE } from '../../utils/const';

type GenresProps = {
  films: FilmsType,
}

function Genres({ films }: GenresProps): JSX.Element {
  const [activeGenre, setActiveGenre] = useState(DEFAULT_GENRE);

  const genresList = films.map((film) => film.genre);

  const uniqueGenres = Array.from(new Set([DEFAULT_GENRE, ...genresList]));


  const handleGenreClick = (evt: MouseEvent<HTMLLIElement>) => {
    setActiveGenre(evt.currentTarget.innerText);
  };

  return (
    <ul className="catalog__genres-list">
      {uniqueGenres.map((genreItem) => (
        <li
          className={`catalog__genres-item ${
            activeGenre === genreItem ? 'catalog__genres-item--active' : ''
          }`}
          key={genreItem}
          onClick={handleGenreClick}
        >
          <span className="catalog__genres-link">{genreItem}</span>
        </li>
      ))}
    </ul>
  );
}

export default Genres;
