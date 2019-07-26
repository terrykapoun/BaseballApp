import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginForm = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
    // passwordConfirm: [null, Validators.required],
  })

  // hasUnitNumber = false;

  

  constructor(private fb: FormBuilder, private registrationService: RegistrationService,  private router: Router,  private route: ActivatedRoute,) {}

  login(){
    // if(this.loginForm.valid){
    this.registrationService.login(this.loginForm.value)
    .subscribe(
      (res: any) => {
        console.log(res)
        localStorage.setItem('token', res.token)
        return this.router.navigate(['/stats-page'])
      },
      err => console.log(err)
    )
  }
      
     
    }
  
    
        
  
  
  
