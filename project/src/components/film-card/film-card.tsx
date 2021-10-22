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

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => onActiveCardHover(film.id)}
      onMouseEnter={() => setIsPlaying(true)}
      onMouseLeave={() => setIsPlaying(false)}
    >
      <div className="small-film-card__image">
        {isPlaying ? (
          <VideoPlayer
            key={film.id}
            src={film.preview_video_link}
            isActive={isPlaying}
          />
        ) : (
          <img
            src={film.preview_image}
            alt={film.name}
            width="280"
            height="175"
          />
        )}
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
