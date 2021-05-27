import { createAction, props } from '@ngrx/store';

export const LOGIN_START = '[Auth] Login Start';
export const AUTHENTICATE_SUCCESS = '[Auth] Authenticate Success';
export const AUTHENTICATE_FAIL = '[Auth] Authenticate Fail';
export const LOGOUT = '[Auth] Logout';

export const LoginStart = createAction(
  LOGIN_START,
  props<{
    username: string;
    password: string;
  }>()
);

export const AuthenticateSuccess = createAction(
  AUTHENTICATE_SUCCESS,
  props<{
    username: string;
    token: string;
  }>()
);

export const AuthenticateFail = createAction(
  AUTHENTICATE_FAIL,
  props<{ error: string }>()
);

export const Logout = createAction(LOGOUT);
