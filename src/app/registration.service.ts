import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  registrationSubmit(customer: Object){
   return this.http.post('/customers/signup', customer)
    
  } 
  
  loginSubmit(customer: Object) {
    return this.http.post('/customers/login', customer)
  }
}

