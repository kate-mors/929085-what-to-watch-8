import { changeGenre, loadFilms, showMoreFilms, requireAuthorization } from '../store/actions';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { State } from './state';

export enum ActionType {
  ChangeGenre = 'main/changeGenre',
  LoadFilms = 'data/loadFilms',
  ShowMoreFilms = 'main/showMoreFilms',
  RequireAuthorization = 'user/requireAuthorization',
}

// export type ChangeGenreAction = {
//   type: ActionType.ChangeGenre;
//   payload: string;
// }

// export type LoadFilmsAction = {
//   type: ActionType.LoadFilms;
//   payload: [];
// }

// export type ShowMoreFilmsAction = {
//   type: ActionType.ShowMoreFilms;
// }

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof loadFilms>
  | ReturnType<typeof showMoreFilms>
  | ReturnType<typeof requireAuthorization>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
