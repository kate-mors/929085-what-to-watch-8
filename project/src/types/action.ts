import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { changeGenre, showMoreFilms, loadFilms, requireAuthorization, requireLogout } from '../store/actions';
import { State } from './state';


export enum ActionType {
  ChangeGenre = 'main/changeGenre',
  ShowMoreFilms = 'main/showMoreFilms',
  LoadFilms = 'data/loadFilms',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
}

export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
}

export type ShowMoreFilmsAction = {
  type: ActionType.ShowMoreFilms;
  payload: number;
};

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof showMoreFilms>
  | ReturnType<typeof loadFilms>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
