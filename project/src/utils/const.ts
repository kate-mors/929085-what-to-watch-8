export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export const DEFAULT_GENRE = 'All genres';
export const GENRES_NUMBER = 9;
export const SHOWED_FILMS_NUMBER = 8;
