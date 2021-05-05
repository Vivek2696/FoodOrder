import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._authService.isAuthenticated();
      // .then(
      //   (authenticated: boolean) => {
      //     if (authenticated) {
      //       return true;
      //     }
      //     else {
      //       console.log('user not logged in')
      //       this._router.navigate(['/login']);
      //       return false;
      //     }
      //   }
      // );
  }
  
}
