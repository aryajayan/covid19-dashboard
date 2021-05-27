import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { concatMap, map, take } from 'rxjs/operators';
import * as fromApp from '../../../app.reducer';
import { Country } from '../../country.model';
import * as DashboardActions from '../../store/dashboard.action';
import { selectCountryById } from '../../store/dashboard.selector';

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.scss'],
})
export class EditCountryComponent implements OnInit {
  countryDetails: Country;
  countryForm: FormGroup;
  showErrors: boolean = false;
  constructor(
    private store: Store<fromApp.AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        take(1),
        map((params) => params['id']),
        concatMap((data) => {
          return this.store.select(selectCountryById(parseInt(data)));
        })
      )
      .subscribe((country: Country) => {
        this.countryDetails = country;
        this.createFormGroup();
      });
    this.countryForm.valueChanges.subscribe(() => {
      this.showErrors = false;
    });
  }
  createFormGroup() {
    this.countryForm = new FormGroup({
      cases: new FormControl(this.countryDetails.cases, [Validators.required]),
      deaths: new FormControl(this.countryDetails.deaths, [
        Validators.required,
      ]),
      recovered: new FormControl(this.countryDetails.recovered, [
        Validators.required,
      ]),
      tests: new FormControl(this.countryDetails.tests, [Validators.required]),
    });
  }

  onCancelClick() {
    this.router.navigate(['country-list'], { relativeTo: this.route.parent });
  }

  onSaveClick() {
    if (this.validateForm()) {
      let country: Country = {
        ...this.countryDetails,
        cases: this.countryForm.get('cases').value,
        deaths: this.countryForm.get('deaths').value,
        recovered: this.countryForm.get('recovered').value,
        tests: this.countryForm.get('tests').value,
      };
      this.store.dispatch(DashboardActions.SaveEdittedDetails({ country }));
      this.router.navigate(['country-list'], { relativeTo: this.route.parent });
    }
  }

  validateForm() {
    if (this.countryForm.invalid) {
      this.showErrors = true;
      return false;
    }
    this.showErrors = false;
    return true;
  }

  validateNumber(event) {
    let inputChar = event.key;
    const pattern = /[\.-]/;
    if (pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
