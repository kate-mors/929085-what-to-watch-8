import FilmCard from '../film-card/film-card';
import { FilmsType } from '../../types/films';
import { useState } from 'react';

type FilmsListProps = {
  films: FilmsType,
}

function FilmsList({ films }: FilmsListProps): JSX.Element {
  const [, setActiveFilmCard] = useState(-1);

  const onActiveCardHover = (id: number) => {
    setActiveFilmCard(id);
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          film={film}
          onActiveCardHover={onActiveCardHover}
        />
      ))}
    </div>
  );
}

export default FilmsList;
