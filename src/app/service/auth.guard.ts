import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  const userData = localStorage.getItem('user');

  if (!userData) {
    router.navigate(['/login']);
    return false;
  }

  const user = JSON.parse(userData);

  if (user.role === 'admin') {
    return true;
  }

  alert('Access denied!');
  router.navigate(['/login']);
  return false;
};