//import { AnyAction } from 'redux';
//import { films } from '../mocks/films';
import { ActionType, Actions } from '../types/action';
import { FilmType } from '../types/films';
import { State } from '../types/state';
import { DEFAULT_GENRE, SHOWED_FILMS_NUMBER, AuthorizationStatus } from '../utils/const';

const initialState = {
  genre: DEFAULT_GENRE,
  initialFilms: [],
  filteredFilms: [],
  showedFilmsNumber: SHOWED_FILMS_NUMBER,
  authorization: AuthorizationStatus.Unknown,
  isDataLoaded: true,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.LoadFilms:
      // eslint-disable-next-line no-console
      console.log('@LoadFilms', action.payload);
      return {
        ...state,
        initialFilms: action.payload,
        filteredFilms: action.payload,
        showedFilmsNumber: state.showedFilmsNumber,
      };
    case ActionType.ChangeGenre:
      // eslint-disable-next-line no-console
      console.log('@state', state);

      if (action.payload === DEFAULT_GENRE) {
        return {
          ...state,
          filteredFilms: state.initialFilms,
        };
      }
      return {
        ...state,
        genre: action.payload,
        filteredFilms: state.initialFilms.filter((film: FilmType) => film.genre === action.payload),
      };
    case ActionType.ShowMoreFilms:
      return {
        ...state,
        showedFilmsNumber: state.showedFilmsNumber + action.payload,
      };
    case ActionType.RequireAuthorization:
      return {
        ...state,
        authorization: action.payload,
        isDataLoaded: true,
      };
    case ActionType.RequireLogout:
      return {
        ...state,
        authorization: AuthorizationStatus.NoAuth,
      };
    default:
      return state;
  }
};


export { reducer };
