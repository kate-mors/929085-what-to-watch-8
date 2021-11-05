import { FilmsType } from './films';

export type State = {
  genre: string,
  initialFilms: FilmsType,
  filteredFilms: FilmsType,
}
