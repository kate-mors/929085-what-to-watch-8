import {ThunkActionResult} from '../types/action';
import {loadFilms, requireAuthorization, requireLogout} from '../store/actions';
import {saveToken, dropToken, Token} from '../utils/token';
import {APIRoute, AuthorizationStatus, HttpCode} from '../utils/const';
import {FilmType} from '../types/films';
import {AuthData} from '../types/auth-data';

export const fetchFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmType[]>(APIRoute.Films);
    dispatch(loadFilms(data));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login);
    if (HttpCode.Success) {
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    }
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };


export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };
