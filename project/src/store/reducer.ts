import { films } from '../mocks/films';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';
import { DEFAULT_GENRE, SHOWED_FILMS_NUMBER } from '../utils/const';

const initialState = {
  genre: DEFAULT_GENRE,
  shownFilmsNumber: SHOWED_FILMS_NUMBER,
  initialFilms: films,
  activeFilms: films,
};

const reducer = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      if (action.payload === DEFAULT_GENRE) {
        return {
          ...initialState,
        };
      }
      return {
        ...state,
        genre: action.payload,
        activeFilms: state.initialFilms.filter((film) => film.genre === action.payload),
      };
    default:
      return state;
  }
};


export { reducer };
