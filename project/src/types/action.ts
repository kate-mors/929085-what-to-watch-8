export enum ActionType {
  ChangeGenre = 'main/changeGenre',
}

export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
}


