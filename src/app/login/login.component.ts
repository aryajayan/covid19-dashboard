import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as fromApp from '../app.reducer';
import * as AuthActions from '../login/store/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  errorMessage: string = '';
  subscription: Subscription;
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.subscription = this.store.select('auth').subscribe((authState) => {
      this.errorMessage = authState.authError;
    });
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  // login click function
  onLogin() {
    let username = this.loginForm.get('username').value;
    let password = this.loginForm.get('password').value;
    this.store.dispatch(
      AuthActions.LoginStart({ username: username, password: password })
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
