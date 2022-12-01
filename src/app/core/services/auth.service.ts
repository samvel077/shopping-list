import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '@core/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _router: Router) {}

  login(user: User) {
    localStorage.setItem('user', user.username);
    this._router.navigate(['shopping-list']);
  }

  logout() {
    localStorage.removeItem('user');
    this._router.navigate(['login']);
  }

  get isLogedIn(): boolean {
    return !!localStorage.getItem('user');
  }
}
