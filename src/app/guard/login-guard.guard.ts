import { Injectable } from '@angular/core';
import {CanActivate, Router,  UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor(private _router: Router) { }

  canActivate(): boolean | UrlTree {
    let isAuth = localStorage.getItem('tok');
    if (isAuth) {
      const tree: UrlTree = this._router.parseUrl('dashboard');
      return tree;
    } else {
      return true;
    }
  }

}
