import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export class MyCanActivateGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return confirm('Are you sure?');
  }
}
