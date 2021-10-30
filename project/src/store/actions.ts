import { ActionType, ChangeGenreAction, ResetGenreAction, FilterFilmsByGenreAction } from '../types/action';


export const changeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export const resetGenre = (genre: string): ResetGenreAction => ({
  type: ActionType.ResetGenres,
  payload: genre,
});

export const filterFilmsByGenre = (): FilterFilmsByGenreAction => ({
  type: ActionType.FilterFilmsByGenre,
});

