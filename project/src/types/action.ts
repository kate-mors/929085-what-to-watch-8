import { FilmsType } from './films';

export enum ActionType {
  ChooseGenre = 'genres/chooseGenre',
  UpdateFilmsList = 'films/updateFilmsList',
  ResetGenres = 'genres/resetGenre',
}

export type ChooseGenreAction = {
  type: ActionType.ChooseGenre;
  payload: string;
}

export type ResetGenreAction = {
  type: ActionType.ResetGenres;
  payload: string,
}

export type UpdateFilmsListAction = {
  type: ActionType.UpdateFilmsList;
  payload: FilmsType,
}

export type Actions = ChooseGenreAction | UpdateFilmsListAction | ResetGenreAction;


