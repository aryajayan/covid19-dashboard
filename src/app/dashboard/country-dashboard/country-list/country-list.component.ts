import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Country } from '../../country.model';
import * as fromApp from '../../../app.reducer';
import * as DashboardActions from '../../store/dashboard.action';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { selectCountryList } from '../../store/dashboard.selector';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {
  countryList: Country[] = null;
  filterMetadata = { count: 0 };
  filterForm: FormGroup;
  startCount: number = 0;
  endCount: number = 30;
  endDisplayCount: number = 30;
  totalDisplayCount: number = 0;
  subscription1: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;
  editMode: boolean = false;
  sortByList = [
    'Country',
    'Cases',
    'Deaths',
    'Recovered',
    'Tests',
    'Population',
  ];

  constructor(
    private store: Store<fromApp.AppState>,
    private detectChangeRef: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  @ViewChild('tileContainer') tileContainer: ElementRef;

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      sortBy: new FormControl('Country'),
      searchText: new FormControl(''),
    });

    this.subscription1 = this.store.select(selectCountryList).subscribe(
      (data) => {
        this.countryList = data;
        if (this.countryList == null) {
          this.store.dispatch(DashboardActions.LoadCountryDashboard());
        } else {
          this.filterMetadata.count = this.countryList.length;
        }
      },
      (error) => {
        alert('Unable to fetch data. Please try again after sometime');
      }
    );
    this.subscription2 = this.filterForm
      .get('searchText')
      .valueChanges.subscribe((value) => {
        this.startCount = 0;
        this.endCount = 30;
        this.endDisplayCount = 30;
      });

    this.subscription3 = this.filterForm
      .get('sortBy')
      .valueChanges.subscribe((item) => {
        this.onFilterChanged(item);
      });
  }

  nextClicked() {
    if (this.endCount < this.filterMetadata.count) {
      this.startCount += 30;
      this.endCount += 30;
      this.endDisplayCount = this.endCount;
      if (this.endCount > this.filterMetadata.count) {
        this.endDisplayCount = this.filterMetadata.count;
      }
      this.tileContainer.nativeElement.scrollTop = 0;
    }
  }

  previousClicked() {
    if (this.startCount > 0) {
      this.startCount -= 30;
      this.endCount -= 30;
      this.endDisplayCount = this.endCount;
      this.tileContainer.nativeElement.scrollTop = 0;
    }
  }
  onFilterChanged(item: string) {
    item = item.toLowerCase();
    this.countryList = [...this.countryList].sort((a, b) =>
      a[item] > b[item] ? 1 : a[item] < b[item] ? -1 : 0
    );
  }

  ngAfterContentChecked() {
    this.detectChangeRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
  }
  onCountryEdit(countryId) {
    this.router.navigate(['edit-country', countryId], {
      relativeTo: this.route.parent,
    });
  }
}
