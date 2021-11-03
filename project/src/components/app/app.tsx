import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute } from '../../utils/const';
import MainPage from '../main-page/main-page';
import AddReview from '../add-review/add-review';
import Film from '../film/film';
import MyList from '../my-list/my-list';
import PageNotFound from '../page-not-found/page-not-found';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import PrivateRoute from '../privateroute/private-route';
import { FilmsType } from '../../types/films';
import { reviews } from '../../mocks/reviews';

type AppProps = {
  films: FilmsType;
};

function App({ films }: AppProps): JSX.Element {

  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <MainPage films={films} />
        </Route>
        <Route path={AppRoute.SignIn} exact>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => (
            <MyList films={films} />
          )}
          isLoggedIn
        >
        </PrivateRoute>
        <Route path={AppRoute.Film}>
          <Film films={films} reviews={reviews} />
        </Route>
        <Route path={AppRoute.AddReview} exact>
          <AddReview films={films} />
        </Route>
        <Route path={AppRoute.Player} exact>
          <Player films={films} />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
