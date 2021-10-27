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

export const getSameGenreFilms = (filmsArray: FilmsType, genre:string, id:number) => filmsArray.filter((filmItem) => filmItem.id !== id && filmItem.genre === genre) || ({} as FilmType);

export const getRatingLevel = (score: number) => {
  let ratingLevel;

  switch (true) {
    case score < 3 && score >= 0:
      ratingLevel = 'Bad';
      break;
    case score < 5 && score >= 3:
      ratingLevel = 'Normal';
      break;
    case score < 8 && score >= 5:
      ratingLevel = 'Good';
      break;
    case score < 10 && score >= 8:
      ratingLevel = 'Very good';
      break;
    case score >= 10:
      ratingLevel = 'Awesome';
      break;
  }
  return ratingLevel;
};

export const convertReviewDate = (date: string | Date) => {
  const newDate = new Date(date);
  return newDate.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

export const getTimeAtribute = (date: string | Date) => {
  const newtimeDate = new Date(date);
  return newtimeDate.toLocaleDateString('fr-CA');
};


