import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router';
import { AppRoute } from '../../const';


type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
  isLoggedIn: boolean;
};

function PrivateRoute({ exact, path, render, isLoggedIn }: PrivateRouteProps): JSX.Element {
  return (
    <Route exact={exact} path={path}
      render={() => (
        isLoggedIn ? render() : <Redirect to={AppRoute.SignIn} />
      )}
    />
  );
}

export default PrivateRoute;

