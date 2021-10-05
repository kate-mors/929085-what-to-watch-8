import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router';
import { AppRoute, LogInStatus } from '../../const';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
  logInStatus: LogInStatus;
}

function PrivateRoute({ exact, path, render, logInStatus }: PrivateRouteProps): JSX.Element {
  return (
    <Route exact={exact} path={path}
      render={() => (
        logInStatus === LogInStatus.LogedIn ? render() : <Redirect to={AppRoute.SignIn} />
      )}
    />
  );
}

export default PrivateRoute;

