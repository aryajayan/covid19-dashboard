import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as DashboardActions from './dashboard.action';
import {
  catchError,
  exhaustMap,
  map,
  mergeMap,
  switchMap,
  tap,
} from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Country } from '../country.model';

@Injectable()
export class DashboardEffect {
  loadDashboard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardActions.LoadDashboard),
      switchMap(() => {
        return this.http.get('https://corona.lmao.ninja/v2/all').pipe(
          map((result) => {
            return DashboardActions.FetchTotal({
              totaldata: {
                cases: result['cases'],
                todayCases: result['todayCases'],
                deaths: result['deaths'],
                todayDeaths: result['todayDeaths'],
                recovered: result['recovered'],
                todayRecovered: result['todayRecovered'],
              },
            });
          }),
          catchError((error) => {
            return throwError(error);
          })
        );
      })
    )
  );
  loadCountryDashboard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardActions.LoadCountryDashboard),
      switchMap(() => {
        return this.http.get('https://corona.lmao.ninja/v2/countries').pipe(
          map((result) => {
            let countries = Object.values(result).map((item: Country) => {
              return {
                country: item['country'],
                id: item['countryInfo']['_id'],
                cases: item['cases'],
                deaths: item['deaths'],
                recovered: item['recovered'],
                tests: item['tests'],
                population: item['population'],
                flagImage: item['countryInfo']['flag'],
              };
            });
            return DashboardActions.FetchCountryList({
              countryData: countries,
            });
          }),
          catchError((error) => {
            return throwError(error);
          })
        );
      })
    )
  );
  constructor(
    private actions$: Actions,
    private router: Router,
    private http: HttpClient
  ) {}
}
