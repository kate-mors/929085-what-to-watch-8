import { AnyAction } from 'redux';
import { films } from '../mocks/films';
import { ActionType } from '../types/action';
import { State } from '../types/state';
import { DEFAULT_GENRE } from '../utils/const';

const initialState = {
  genre: DEFAULT_GENRE,
  initialFilms: films,
  filteredFilms: films,
};

const reducer = (state = initialState, action: AnyAction): State => {
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
        filteredFilms: state.initialFilms.filter((film) => film.genre === action.payload),
      };
    default:
      return state;
  }
};


export { reducer };
