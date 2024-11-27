import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { catchError, map } from 'rxjs';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const authService = inject(AuthService)

  const token = localStorage.getItem('token');
  if (!token) {
    router.navigate(['login']);
    return false;
  }

  return authService.getCurrentUser().pipe(
    map(user => {
      if (user && user.role === 'ADMIN') {
        return true;
      } else {
        router.navigate(['']);
        return false;
      }
    }),
    catchError(() => router.navigate(['login']))
  )
};
