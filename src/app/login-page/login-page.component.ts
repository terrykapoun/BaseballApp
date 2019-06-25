import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
  })

  hasUnitNumber = false;

  

  constructor(private fb: FormBuilder, private registrationService: RegistrationService) {}

  loginSubmit(){
    if(this.loginForm.valid){
    this.registrationService.registrationSubmit(this.loginForm.value).subscribe(res => console.log(res))
  }
  
  }
}