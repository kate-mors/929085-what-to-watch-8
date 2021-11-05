import React from 'react';
import { DEFAULT_GENRE } from '../../utils/const';
import { State } from '../../types/state';
import { bindActionCreators, Dispatch } from 'redux';
import { changeGenre as changeGenreState } from '../../store/actions';
import { connect, ConnectedProps } from 'react-redux';
import { FilmsType } from '../../types/films';

type GenresProps = {
  films: FilmsType;
};

const mapStateToProps = ({ genre }: State) => ({
  genre,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onChangeGenre: changeGenreState,
    },
    dispatch,
  );

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & GenresProps;

function Genres(props: ConnectedComponentProps): JSX.Element {
  const { genre, films, onChangeGenre } = props;

  const genresList = films.map((film) => film.genre);

  const uniqueGenres = Array.from(new Set([DEFAULT_GENRE, ...genresList]));

  return (
    <ul className="catalog__genres-list">
      {uniqueGenres.map((genreItem) => (
        <li
          className={`catalog__genres-item ${
            genre === genreItem ? 'catalog__genres-item--active' : ''
          }`}
          key={genreItem}
          onClick={() => {
            onChangeGenre(genreItem);
          }}
        >
          <span className="catalog__genres-link">{genreItem}</span>
        </li>
      ))}
    </ul>
  );
}

export { Genres };
export default connector(Genres);
