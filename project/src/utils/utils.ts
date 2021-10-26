import { FilmsType, FilmType } from '../types/films';

export const convertFilmRunTime = (time: number): string => {
  const hours = Math.floor(time / 60);
  const minutes = Math.floor(time - hours * 60);
  return (
    `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`
  );
};

export const getCurrentFilm = (filmsArray: FilmsType, id: string) =>
  filmsArray.find((filmItem) => filmItem.id === Number(id)) || ({} as FilmType);

export const getFavoriteFilms = (filmsArray: FilmsType) =>
  filmsArray.filter((filmItem) => filmItem.is_favorite);
