import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from './login/store/auth.reducer';
import * as fromDashboard from './dashboard/store/dashboard.reducer';

export interface AppState {
  auth: fromAuth.State;
  dashboard: fromDashboard.State;
}
export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  dashboard: fromDashboard.dashboardReducer,
};
