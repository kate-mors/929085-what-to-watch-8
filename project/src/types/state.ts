import { AuthorizationStatus } from '../utils/const';
import { FilmsType } from './films';

export type State = {
  genre: string,
  initialFilms: FilmsType,
  filteredFilms: FilmsType,
  showedFilmsNumber: number,
  authorization: AuthorizationStatus,
  isDataLoaded: boolean,
}
