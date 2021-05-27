import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/shared/user.model';
import * as AuthActions from './auth.action';

export interface State {
  user: User;
  authError: string;
}

const initialState: State = {
  user: null,
  authError: null,
};
export const authReducer = createReducer(
  initialState,
  on(AuthActions.LoginStart, (state, action) => ({
    ...state,
    user: null,
    authError: null,
  })),
  on(AuthActions.AuthenticateSuccess, (state, action) => ({
    ...state,
    user: new User(action.username, action.token),
  })),
  on(AuthActions.AuthenticateFail, (state, action) => ({
    ...state,
    user: null,
    authError: action.error,
  })),
  on(AuthActions.Logout, (state, action) => ({
    ...state,
    user: null,
  }))
);
