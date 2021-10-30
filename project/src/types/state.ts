import { FilmsType } from './films';

export type State = {
  genre: string,
  shownFilms: number,
  activeFilms: FilmsType
}
