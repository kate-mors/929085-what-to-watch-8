import {ActionType} from '../types/action';
import { FilmsType } from '../types/films';
import { AuthorizationStatus } from '../utils/const';


export const changeGenre = (genre: string) => ({
  type: ActionType.ChangeGenre,
  payload: genre,
} as const);

export const showMoreFilms = () => ({
  type: ActionType.ShowMoreFilms,
} as const);

export const loadFilms = (films: FilmsType) => ({
  type: ActionType.LoadFilms,
  payload: films,
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);
