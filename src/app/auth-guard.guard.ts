import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot} from '@angular/router';
import { PLATFORM_ID, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    try {
      if (this.platformId === 'browser') {
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');

        if (token && role) {
          const roleNumber = parseInt(role);
            if (route.data && route.data['role'] === roleNumber) {
              return true;
            } else {
              this.router.navigateByUrl('')
              return false;
            }
          } else {
            this.router.navigateByUrl('')
            return false;
          }
        } else {
          this.router.navigateByUrl('')
          return false;
        }
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
