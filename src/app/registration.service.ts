import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient, private router: Router) { }

  signUp(customer: Object) {
    return this.http.post('/customers/signup', customer)
  }
  login(customer: Object) {
    return this.http.post('/customers/login', customer);
  }
  isLoggedIn() {
    return !!localStorage.getItem('token')
  }
  isLoggedOut() {
    localStorage.removeItem('token')
    return this.router.navigate(['/home'])
  }
}





