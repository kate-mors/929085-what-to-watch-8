import { FilmsType } from './films';

export type State = {
  genre: string,
  shownFilmsNumber: number,
  initialFilms: FilmsType,
  activeFilms: FilmsType,
}
