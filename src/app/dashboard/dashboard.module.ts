import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { TotalDashboardComponent } from './total-dashboard/total-dashboard.component';
import { CountryDashboardComponent } from './country-dashboard/country-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AuthGuardService } from '../shared/auth-guard.service';
import { EditCountryComponent } from './country-dashboard/edit-country/edit-country.component';
import { CountryListComponent } from './country-dashboard/country-list/country-list.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TotalDashboardComponent,
    CountryDashboardComponent,
    EditCountryComponent,
    CountryListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuardService],
        children: [
          { path: '', redirectTo: 'total-dashboard', pathMatch: 'full' },
          { path: 'total-dashboard', component: TotalDashboardComponent },
          {
            path: 'country-dashboard',
            component: CountryDashboardComponent,
            children: [
              { path: '', redirectTo: 'country-list' },
              { path: 'country-list', component: CountryListComponent },
              {
                path: 'edit-country/:id',
                component: EditCountryComponent,
              },
            ],
          },
        ],
      },
    ]),
  ],
})
export class DashboardModule {}
