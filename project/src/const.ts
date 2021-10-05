export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum LogInStatus {
  LogedIn = 'LOGEDIN',
  NotLogedIn = 'NO_LOGEDIN',
}
