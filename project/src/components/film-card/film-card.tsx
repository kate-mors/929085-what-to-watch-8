import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FilmType } from '../../types/films';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: FilmType;
  onActiveCardHover: (id: number) => void;
};

function FilmCard({ film, onActiveCardHover }: FilmCardProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleArticleMouseEnter = () => {
    onActiveCardHover(film.id);
    setIsPlaying(true);
  };

  const handleArticleMouseLeave = () => {
    onActiveCardHover(-1);
    setIsPlaying(false);

  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleArticleMouseEnter}
      onMouseLeave={handleArticleMouseLeave}
    >
      <div className="small-film-card__image">
        <VideoPlayer
          src={film.preview_video_link}
          poster={film.preview_image}
          isActive={isPlaying}
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
