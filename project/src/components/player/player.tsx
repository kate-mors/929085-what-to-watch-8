import CSS from 'csstype';
import { useParams } from 'react-router-dom';
import { FilmsType, FilmType } from '../../types/films';


type PlayerProps = {
  films: FilmsType,
}

function Player({films}: PlayerProps): JSX.Element {
  const styleProperty: CSS.Properties = {
    'left': '30%',
  };
  const { id } = useParams<{ id?: string }>();
  const film =
    films.find((filmItem) => filmItem.id === Number(id)) || ({} as FilmType);

  return (
    <div className="player">
      <video
        src="#"
        className="player__video"
        poster={film.preview_image}
      >
      </video>

      <button type="button" className="player__exit">
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value="30"
              max="100"
            >
            </progress>
            <div className="player__toggler" style={styleProperty}>
              Toggler
            </div>
          </div>
          <div className="player__time-value">{film.run_time}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{film.name}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
