import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Router, } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup

  constructor(private fb: FormBuilder, private registrationService: RegistrationService,  private router: Router,) {
  this.loginForm = this.createFormGroup()
  console.log(this.loginForm.controls)
}
  
createFormGroup() {
  
  return new FormGroup({
    email: new FormControl ('', [Validators.required, Validators.email]),
    password: new FormControl ('',[Validators.required, Validators.minLength(7), Validators.maxLength(20)]),
    // passwordConfirm: [null, Validators.required],
  })

 
}
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
   
  ngOnInit() {
  }
     
    }
  
    
        
  
  
  
