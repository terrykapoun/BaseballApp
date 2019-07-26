import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { StatsPageComponent } from './stats-page/stats-page.component';
import { LoginGuard } from './login.guard';


const routes: Routes = [

  
  { path: 'home', component: HomePageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'registration-page', component: RegistrationPageComponent },
  { path: 'stats-page', component: StatsPageComponent, canActivate: [LoginGuard ]},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
]
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
