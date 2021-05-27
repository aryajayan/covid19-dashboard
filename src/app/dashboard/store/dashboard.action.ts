import { createAction, props } from '@ngrx/store';
import { Country } from '../country.model';
import { TotalCaseData } from '../total-cases.model';

export const FETCH_TOTAL = '[Dashboard] Fetch Total';
export const LOAD_DASHBOARD = '[Dashboard] Load ';
export const LOAD_COUNTRY_DASHBOARD = '[Dashboard] Load Country Dashboard';
export const FETCH_COUNTRY_LIST = '[Dashboard] Fetch Country List';
export const SAVE_EDITTED_DETAILS = '[Dashboard] Save Editted Details';
export const LOGOUT_DASHBOARD = '[Dashboard] Logout Dashboard';

export const LoadDashboard = createAction(LOAD_DASHBOARD);
export const FetchTotal = createAction(
  FETCH_TOTAL,
  props<{
    totaldata: TotalCaseData;
  }>()
);
export const LoadCountryDashboard = createAction(LOAD_COUNTRY_DASHBOARD);
export const FetchCountryList = createAction(
  FETCH_COUNTRY_LIST,
  props<{
    countryData: Country[];
  }>()
);
export const SaveEdittedDetails = createAction(
  SAVE_EDITTED_DETAILS,
  props<{
    country: Country;
  }>()
);
export const LogoutDashboard = createAction(LOGOUT_DASHBOARD);
