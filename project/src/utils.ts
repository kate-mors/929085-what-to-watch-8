import { FilmsType, FilmType } from './types/films';

export const timeConvert = (num: number) => {
  const hours = (num / 60);
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  const seconds = (minutes - rminutes) * 60;
  const rseconds = Math.round(seconds);
  return `${  rhours  } : ${  rminutes  } : ${ rseconds}`;
};

export const getCurrentFilm = (filmsArray: FilmsType, id: string) =>
  filmsArray.find((filmItem) => filmItem.id === Number(id)) || ({} as FilmType);


