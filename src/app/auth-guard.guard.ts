import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataService } from './services/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private ds: DataService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = window.localStorage.getItem('token');
    const role = window.localStorage.getItem('role');
    if (token && role) {
      if (route.data && route.data['role'] === parseInt(role)) {
        return true;
      } else {
        this.router.navigate(['']);
        return false;
      }
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
