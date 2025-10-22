import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('token')) {
      try {
        jwtDecode(localStorage.getItem('token') || '');
        return true;
        
      } catch (error) {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
        return false;
      }

    }
    else {
      // Not logged in, redirect to login page with return url
    this.router.navigate(['/login']);
    return false;
    }

    
  }
}