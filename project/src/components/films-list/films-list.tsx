import FilmCard from '../film-card/film-card';
import { FilmsType, FilmType } from '../../types/films';
import { useState } from 'react';

type FilmsListProps = {
  films: FilmsType,
}

function FilmsList({ films }: FilmsListProps): JSX.Element {
  const [, setActiveFilmCard] = useState({} as FilmType);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          film={film}
          setActiveFilmCard={setActiveFilmCard}
        />
      ),
      )}
    </div>
  );
}

export default FilmsList;
