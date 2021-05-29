import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../app.reducer';
import { TotalCaseData } from '../total-cases.model';
import * as DashboardActions from '../store/dashboard.action';
import { Subscription } from 'rxjs';
import { selectTotalList } from '../store/dashboard.selector';

@Component({
  selector: 'app-total-dashboard',
  templateUrl: './total-dashboard.component.html',
  styleUrls: ['./total-dashboard.component.scss'],
})
export class TotalDashboardComponent implements OnInit, OnDestroy {
  totalData: TotalCaseData = null;
  subscription: Subscription;
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    // get total case report from store
    this.subscription = this.store.select(selectTotalList).subscribe(
      (data) => {
        this.totalData = data;
        if (this.totalData == null) {
          this.store.dispatch(DashboardActions.LoadDashboard());
        }
      },
      (error) => {
        alert('Unable to fetch data. Please try again after sometime');
      }
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
