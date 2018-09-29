import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './layouts/auth/auth.component';
import { SiteComponent } from './layouts/site/site.component';

import { AuthGuard } from './classes/auth.guard';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OverviewComponent } from './overview/overview.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { HistoryComponent } from './history/history.component';

import { CategoriesComponent } from './categories/categories.component';
import { FormComponent } from './categories/form/form.component';

import { OrderComponent } from './order/order.component';
import { RankComponent } from './order/rank/rank.component';
import { StanceComponent } from './order/stance/stance.component';

const routes: Routes = [
  {
    path: '', component: AuthComponent, children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  {
    path: '', component: SiteComponent, canActivate: [AuthGuard], children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'analytics', component: AnalyticsComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'order', component: OrderComponent, children: [
        { path: '', component: RankComponent },
        { path: ':id', component: StanceComponent }
      ]},
      { path: 'categories', component: CategoriesComponent },
      { path: 'categories/new', component: FormComponent },
      { path: 'categories/:id', component: FormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }