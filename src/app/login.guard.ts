import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RegistrationService } from './registration.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private regServ: RegistrationService, private router: Router) { }

  canActivate(): boolean {
    if (this.regServ.isLoggedIn()) {
      return true
    } else {
      this.router.navigate(['login-page'])
      return false
    }
  }
}
