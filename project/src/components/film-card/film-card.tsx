import { Link } from 'react-router-dom';
import { FilmType} from '../../types/films';


type FilmProps = {
  film: FilmType;
  onActiveCardHover: (id: number) => void;
};

function FilmCard(props: FilmProps): JSX.Element {
  const { film, onActiveCardHover } = props;

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => onActiveCardHover(film.id)}
    >
      <div className="small-film-card__image">
        <img
          src={film.preview_image}
          alt={film.name}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`films/${film.id}`}>
          {film.name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
