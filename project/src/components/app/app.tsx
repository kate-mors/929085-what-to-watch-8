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
//import { FilmsType } from '../../types/films';
import { reviews } from '../../mocks/reviews';
import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';

// const isCheckedAuth = (authorization: AuthorizationStatus): boolean =>
//   authorization === AuthorizationStatus.Unknown;

const mapStateToProps = ({initialFilms}: State) => ({
  initialFilms,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props: PropsFromRedux): JSX.Element {
  const { initialFilms } = props;

  if (initialFilms.length === 0) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <MainPage />
        </Route>
        <Route path={AppRoute.SignIn} exact>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyList films={initialFilms} />}
        >
        </PrivateRoute>
        <Route path={AppRoute.Film}>
          <Film films={initialFilms} reviews={reviews} />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.AddReview}
          render={() => <AddReview films={initialFilms} />}
        >
        </PrivateRoute>
        <Route path={AppRoute.Player} exact>
          <Player films={initialFilms} />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export { App };
export default connector(App);
