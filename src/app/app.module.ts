import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatBottomSheetModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OverviewComponent } from './overview/overview.component';
import { SheetComponent } from './sheet/sheet.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { HistoryComponent } from './history/history.component';
import { OrderComponent } from './order/order.component';
import { CategoriesComponent } from './categories/categories.component';

import { AuthComponent } from './layouts/auth/auth.component';
import { SiteComponent } from './layouts/site/site.component';

import { TokenIntercepter } from './classes/token.intercepter';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthComponent,
    SiteComponent,
    RegisterComponent,
    OverviewComponent,
    SheetComponent,
    AnalyticsComponent,
    HistoryComponent,
    OrderComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatBottomSheetModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [SheetComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: TokenIntercepter
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
