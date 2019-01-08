import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import { DataService } from '../../core/services/data.services';
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private dataService: DataService, private myRoute: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.dataService.isAuthenticated()) {
      this.myRoute.navigate(
          ['/login']
      );
      return false;
    }
    return true;
  }
}
