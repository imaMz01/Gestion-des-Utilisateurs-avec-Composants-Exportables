import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({ 
  providedIn: 'root' 
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean {
      if (this.authService.checkRoleAdmin()) {
          return true; // Allow access
      } else {
          this.router.navigate(['/login']); // Redirect if not authorized
          return false; // Block access
      }
  }
}