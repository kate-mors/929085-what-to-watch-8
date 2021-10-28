import { FilmsType } from './films';

export type State = {
  genre: string,
  films: FilmsType,
  shownFilmsNumber: number,
}
