import { Injectable } from '@angular/core';
import {  CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutGuardGuard implements CanActivate {
  constructor(private _router: Router) {}

  canActivate(): Observable<any> | Promise<any> | any {
    let isAuth = localStorage.getItem('tok');
    if (isAuth) {
      console.log(isAuth, 'Auth');
      return new Observable((observer) => {
        observer.next(true);
      });
    } else {
      const tree: UrlTree = this._router.parseUrl('login');
      return tree;
    }
  }

}
