import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routeConfig : Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
