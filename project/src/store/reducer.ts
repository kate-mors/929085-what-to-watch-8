import { films } from '../mocks/films';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';
import { DEFAULT_GENRE, SHOWED_FILMS_NUMBER } from '../utils/const';

const initialState = {
  genre: DEFAULT_GENRE,
  shownFilms: SHOWED_FILMS_NUMBER,
  activeFilms: films,
};

const reducer = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {
        ...state,
        genre: action.payload,
      };
    case ActionType.ResetGenres:
      return {
        ...initialState,
      };
    case ActionType.FilterFilmsByGenre:
      return {
        ...state,
        activeFilms: state.activeFilms.filter((film) => film.genre === action.payload),
      };
    default:
      return state;
  }
};

export { reducer };
