import { Routes } from '@angular/router';
import { Admin } from './admin/admin';
import { SiteEngineer } from './site-engineer/site-engineer';
import { Report } from './report-maker/report-maker';
import { Login } from './Pages/login/login';

export const routes = [
  {
    path: 'admin',
    component: Admin,
    children: [
      { path: 'valuation', loadComponent: () => import('./site-engineer/site-engineer').then(m => m.SiteEngineer) },
      { path: 'reports', loadComponent: () => import('./report-maker/report-maker').then(m => m.Report) },
      { path: '', redirectTo: 'valuation', pathMatch: 'full' }
    ]
  }
];