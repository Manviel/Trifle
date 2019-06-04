import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OverviewComponent } from './overview/overview.component';
import { AnalyticsComponent } from './analytics/analytics.component';

import { HistoryComponent } from './history/history.component';
import { ListComponent } from './history/list/list.component';
import { FilterComponent } from './history/filter/filter.component';

import { OrderComponent } from './order/order.component';
import { RankComponent } from './order/rank/rank.component';
import { StanceComponent } from './order/stance/stance.component';

import { CategoriesComponent } from './categories/categories.component';
import { FormComponent } from './categories/form/form.component';
import { PositionsComponent } from './categories/positions/positions.component';

import { AuthComponent } from './layouts/auth/auth.component';
import { SiteComponent } from './layouts/site/site.component';

import { SheetComponent } from './sheet/sheet.component';
import { DialogComponent } from './dialog/dialog.component';
import { ModalComponent } from './modal/modal.component';
import { PopupComponent } from './popup/popup.component';

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
    CategoriesComponent,
    FormComponent,
    PositionsComponent,
    DialogComponent,
    RankComponent,
    StanceComponent,
    ModalComponent,
    ListComponent,
    FilterComponent,
    PopupComponent
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
    MatDialogModule,
    MatGridListModule,
    MatExpansionModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  entryComponents: [
    SheetComponent,
    DialogComponent,
    ModalComponent,
    PopupComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: TokenIntercepter
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
