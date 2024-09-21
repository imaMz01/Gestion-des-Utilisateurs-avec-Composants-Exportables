import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Injectable } from '@angular/core';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };
@Injectable({ 
  providedIn: 'root' 
})
export class authGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean {
      if (this.authService.checkRoleUser()) {
          return true; // Allow access
      } else {
          this.router.navigate(['/login']); // Redirect if not authorized
          return false; // Block access
      }
  }
}