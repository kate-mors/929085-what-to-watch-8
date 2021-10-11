import { Link } from 'react-router-dom';
import { Films } from '../../types/films';
import { AppRoute } from '../../const';

type FilmProps = {
  films: Films
};

function FilmCard({ films }: FilmProps): JSX.Element {
  const [film] = films;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={film.preview_image} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}/${film.id}`}>
          {film.name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
