import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { UpdateDataComponent } from './components/update-data/update-data.component';
import { DisplayLikedComponent } from './components/users-component/dialog/display-liked/display-liked.component';
import { SnackbarComponent } from './components/users-component/dialog/snackbar/snackbar.component';
import { NewsComponentComponent } from './components/news-component/news-component.component';
import { BitcoinSocketsComponent } from './components/bitcoin-sockets/bitcoin-sockets.component';


// Material imports
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FilterComponent } from './components/home/dialogs/filter/filter.component';
import { SortComponent } from './components/home/dialogs/sort/sort.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { EditComponent } from './components/home/dialogs/edit/edit.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UsersComponentComponent } from './components/users-component/users-component.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SplashScreenComponent,
    UpdateDataComponent,
    FilterComponent,
    SortComponent,
    EditComponent,
    NewsComponentComponent,
    UsersComponentComponent,
    DisplayLikedComponent,
    SnackbarComponent,
    BitcoinSocketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatDividerModule,
    ScrollingModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatPaginatorModule,
    MatMenuModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatCardModule,
    MatProgressBarModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
