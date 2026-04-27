import { Routes } from '@angular/router';
import { Login } from './Pages/login/login';
import { Admin } from './admin/admin';
import { authGuard } from './service/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: Login },

  // ✅ Admin layout
  {
    path: 'admin',
    component: Admin,
    canActivate: [authGuard],
    children: [
      {
        path: 'valuation',
        loadComponent: () => import('./site-engineer/site-engineer').then((m) => m.SiteEngineer),
      },
      {
        path: 'reports',
        loadComponent: () => import('./report-maker/report-maker').then((m) => m.Report),
      },
    ],
  },

  // ✅ Standalone routes
  {
    path: 'site-engineer',
    loadComponent: () => import('./site-engineer/site-engineer').then((m) => m.SiteEngineer),
  },
  {
    path: 'report-maker',
    loadComponent: () => import('./report-maker/report-maker').then((m) => m.Report),
  },
];
