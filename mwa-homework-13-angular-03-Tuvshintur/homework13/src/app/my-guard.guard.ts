import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MyGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let users = localStorage.getItem('users');
    if (users === null) {
      return this.router.navigate(['/pagenotfound']);
    }

    let cnt = JSON.parse(users).results.length;

    if (cnt <= parseInt(next.paramMap.get('uuid')) || cnt < 0) {
      return this.router.navigate(['/pagenotfound']);
    }
    return true;
  }

}
