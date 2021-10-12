import { Link } from 'react-router-dom';
// import { AppRoute } from '../../const';
import { FilmType} from '../../types/films';


type FilmProps = {
  film: FilmType;
  setActiveFilmCard: React.Dispatch<React.SetStateAction<FilmType>>;
};

function FilmCard({ film, setActiveFilmCard }: FilmProps): JSX.Element {
  const handleMouseOver = () => setActiveFilmCard(film);

  return (
    <article className="small-film-card catalog__films-card" onMouseOver={handleMouseOver}>
      <div className="small-film-card__image">
        <img src={film.preview_image} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to={`films/${film.id}`}
        >
          {film.name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
