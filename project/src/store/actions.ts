import { ActionType } from '../types/action';
import { FilmsType } from '../types/films';
import { AuthorizationStatus } from '../utils/const';


export const changeGenre = (genre: string) => ({
  type: ActionType.ChangeGenre,
  payload: genre,
} as const);


export const loadFilms = (data: FilmsType)=> ({
  type: ActionType.LoadFilms,
  payload: {data},
} as const);

export const requireAuthorization = (authorizationStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authorizationStatus,
} as const);

export const showMoreFilms = ()=> ({
  type: ActionType.ShowMoreFilms,
} as const);
