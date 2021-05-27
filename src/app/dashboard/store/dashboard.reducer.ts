import { createReducer, on } from '@ngrx/store';
import { Country } from '../country.model';
import { TotalCaseData } from '../total-cases.model';
import * as DashboardActions from './dashboard.action';

export interface State {
  totalData: TotalCaseData;
  countryData: Country[];
}

const initialState: State = {
  totalData: null,
  countryData: null,
};
export const dashboardReducer = createReducer(
  initialState,
  on(DashboardActions.FetchTotal, (state, action) => ({
    ...state,
    totalData: action.totaldata,
  })),
  on(DashboardActions.FetchCountryList, (state, action) => ({
    ...state,
    countryData: action.countryData,
  })),
  on(DashboardActions.SaveEdittedDetails, (state, action) => {
    let index = state.countryData.findIndex((a) => a.id === action.country.id);
    return {
      ...state,
      countryData: [
        ...state.countryData.slice(0, index),
        action.country,
        ...state.countryData.slice(index + 1),
      ],
    };
  }),
  on(DashboardActions.LogoutDashboard, (state, action) => ({
    ...state,
    totalData: null,
    countryData: null,
  }))
);
