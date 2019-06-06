import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule, MatSelectModule, MatRadioModule, MatCardModule, MatTableModule } from '@angular/material';
import { HomePageComponent } from './home-page/home-page.component';
import { StatsPageComponent } from './stats-page/stats-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HeaderComponent } from './header/header.component';
import { StatDisplayComponent } from './stat-display/stat-display.component';
import {FormsModule} from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,

    HomePageComponent,
    StatsPageComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    HeaderComponent,
    StatDisplayComponent,






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule, FormsModule, MatTableModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
