import { films } from '../mocks/films';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';
import { DEFAULT_GENRE, SHOWED_FILMS_NUMBER } from '../utils/const';

const initialState = {
  genre: DEFAULT_GENRE,
  films: films,
  shownFilmsNumber: SHOWED_FILMS_NUMBER,
};

const reducer = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChooseGenre:
      return {
        ...state,
        genre: action.payload,
      };
    case ActionType.ResetGenres:
      return {
        ...initialState,
      };
    case ActionType.UpdateFilmsList:
      return {
        ...state,
        films: action.payload,
      };
    default:
      return state;
  }
};

export { reducer };
