import { ActionType, ChooseGenreAction, ResetGenreAction, UpdateFilmsListAction } from '../types/action';
import { FilmsType } from '../types/films';


export const chooseGenre = (genre: string): ChooseGenreAction => ({
  type: ActionType.ChooseGenre,
  payload: genre,
});

export const resetGenre = (genre: string): ResetGenreAction => ({
  type: ActionType.ResetGenres,
  payload: genre,
});

export const updateFilmsList = (filmsList: FilmsType): UpdateFilmsListAction=> ({
  type: ActionType.UpdateFilmsList,
  payload: filmsList,
});

