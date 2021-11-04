export enum ActionType {
  ChangeGenre = 'main/changeGenre',
  ResetGenres = 'main/resetGenre',
  FilterFilmsByGenre = 'main/filterFilmsByGenre',
}

export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
}

export type Actions = ChangeGenreAction;


