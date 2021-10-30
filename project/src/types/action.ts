export enum ActionType {
  ChangeGenre = 'genres/changeGenre',
  ResetGenres = 'genres/resetGenre',
  FilterFilmsByGenre = 'films/filterFilmsByGenre',
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
}

export type Actions = ChangeGenreAction | ResetGenreAction | FilterFilmsByGenreAction;


