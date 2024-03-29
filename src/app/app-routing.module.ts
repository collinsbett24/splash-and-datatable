import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BitcoinDetailsComponent } from './components/bitcoin-sockets/bitcoin-details/bitcoin-details.component';
import { BitcoinSocketsComponent } from './components/bitcoin-sockets/bitcoin-sockets.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponentComponent } from './components/news-component/news-component.component';
import { UsersComponentComponent } from './components/users-component/users-component.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'users', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'news', component: NewsComponentComponent
  },
  {
    path: 'bitcoin', component: BitcoinSocketsComponent
  },
  {
    path: 'users', component: UsersComponentComponent
  },
  {
    path: 'bitcoin-details/:id', component: BitcoinDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
