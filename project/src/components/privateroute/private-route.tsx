import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router';
import { AppRoute, AuthorizationStatus } from '../../utils/const';
import {State} from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';


type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
  authorization: AuthorizationStatus;
};

const mapStateToProps = ({ authorization }: State) => ({
  authorization,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type ConnectedComponentProps = PropsFromRedux & PrivateRouteProps;

function PrivateRoute(props: ConnectedComponentProps): JSX.Element {
  const {authorization, render, path, exact} = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={() =>
        authorization === AuthorizationStatus.Auth ? (
          render()
        ) : (
          <Redirect to={AppRoute.SignIn} />
        )}
    />
  );
}

export { PrivateRoute };
export default connector(PrivateRoute);

