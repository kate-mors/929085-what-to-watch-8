import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createAPI } from './components/api/api';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/app/app';
import { reducer } from './store/reducer';
import { fetchFilmsAction, checkAuthAction } from './store/api-actions';
import { ThunkAppDispatch } from './types/action';
import { requireAuthorization } from './store/actions';
import { AuthorizationStatus } from './utils/const';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchFilmsAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
