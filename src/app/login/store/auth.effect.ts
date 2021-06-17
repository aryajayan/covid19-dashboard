import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.action';
import { map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import * as DashboardActions from '../../dashboard/store/dashboard.action';
import * as fromApp from '../../app.reducer';
import { Store } from '@ngrx/store';

@Injectable()
export class AuthEffect {
  loginStart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.LoginStart),
      map((authData) => {
        if (authData.username == 'admin' && authData.password == 'admin') {
          return AuthActions.AuthenticateSuccess({
            username: authData.username,
            token: 'a@1dmin123',
          });
        } else {
          return AuthActions.AuthenticateFail({
            error: 'Incorrect username or password',
          });
        }
      })
    )
  );

  authenticateSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.AuthenticateSuccess),
        tap(() => {
          this.router.navigate(['/dashboard']);
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.Logout),
        tap(() => {
          this.router.navigate(['login']);
          this.store.dispatch(DashboardActions.LogoutDashboard());
        })
      ),
    { dispatch: false }
  );
  constructor(
    private actions$: Actions,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}
}
