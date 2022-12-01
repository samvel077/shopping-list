import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '@core/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class IsLogedInGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate(): boolean | Promise<boolean> {
    return this._authService.isLogedIn
      ? this._router.navigate(['shopping-list'])
      : true;
  }
}
