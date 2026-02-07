import { Routes } from '@angular/router';
import { environment } from 'src/environments/environment';

export const routes: Routes = [
  {
    path: '',
    redirectTo: environment.defaultRoute,
    pathMatch: 'full',
  },
  {
    path: 'fruit-freshness',
    loadChildren: () => import('@features/fruit-freshness/fruit-freshness.routes'),
  },
];
