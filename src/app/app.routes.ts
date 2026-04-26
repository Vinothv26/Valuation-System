import { Routes } from '@angular/router';
import { Admin } from './admin/admin';
import { Login } from './Pages/login/login';

export const routes: Routes = [

  // 🔐 default route
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // 🔐 login
  {
    path: 'login',
    component: Login
  },

  // 🏢 admin layout
  {
    path: 'admin',
    component: Admin,
    children: [

      // 👷 valuation
      {
        path: 'valuation',
        loadComponent: () =>
          import('./site-engineer/site-engineer')
            .then(m => m.SiteEngineer)
      },

      // 📊 reports
      {
        path: 'reports',
        loadComponent: () =>
          import('./report-maker/report-maker')
            .then(m => m.Report)
      },

      // 🔁 default inside admin
      {
        path: '',
        redirectTo: 'valuation',
        pathMatch: 'full'   // ✅ MUST be literal
      }
    ]
  }
];