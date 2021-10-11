import FilmCard from '../film-card/film-card';
import { Films } from '../../types/films';

type FilmsListProps = {
  films: Films,
}

function FilmsList({ films }: FilmsListProps): JSX.Element {

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          films={films}
        />
      ),
      )}
    </div>
  );
}

export default FilmsList;
