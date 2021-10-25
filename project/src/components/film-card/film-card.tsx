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

  const mouseEnterHandler = () => {
    onActiveCardHover(film.id);
    setIsPlaying(true);
  };

  const mouseLeaveHandler = () => {
    setIsPlaying(false);
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <div className="small-film-card__image">
        <VideoPlayer
          key={film.id}
          src={film.preview_video_link}
          preview={film.preview_image}
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
