export enum ActionType {
  ChangeGenre = 'filter/changeGenre',
  ResetGenres = 'filter/resetGenre',
  FilterFilmsByGenre = 'filter/filterFilmsByGenre',
}

export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
}

export type ResetGenreAction = {
  type: ActionType.ResetGenres;
  payload: string,
}

export type FilterFilmsByGenreAction = {
  type: ActionType.FilterFilmsByGenre;
  payload: string,
}

export type Actions = ChangeGenreAction | ResetGenreAction | FilterFilmsByGenreAction;


