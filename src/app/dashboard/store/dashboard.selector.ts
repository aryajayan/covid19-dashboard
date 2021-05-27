import { createSelector } from '@ngrx/store';
import * as AppSelector from '../../app.selector';
import * as fromApp from '../../app.reducer';
import { Country } from '../country.model';

export const selectTotalList = createSelector(
  AppSelector.selectAppState,
  (state: fromApp.AppState) => state.dashboard.totalData
);
export const selectCountryList = createSelector(
  AppSelector.selectAppState,
  (state: fromApp.AppState) => state.dashboard.countryData
);
export const selectCountryById = (id: number) =>
  createSelector(selectCountryList, (state: Country[]) => {
    let c = state.find((item) => item.id === id);
    return c;
  });
