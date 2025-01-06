import { Routes } from '@angular/router';
import { TransactionComponent } from './transaction.component';

export const routes: Routes = [
  {
    path: '',
    component: TransactionComponent,
  },
  {
    path: 'new',
    loadComponent: () =>
      import('./add-edit/add-edit.component').then((c) => c.AddEditComponent),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./add-edit/add-edit.component').then((c) => c.AddEditComponent),
  },
];
