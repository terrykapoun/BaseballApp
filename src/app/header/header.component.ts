import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private registrationService: RegistrationService, commonModule: CommonModule ) { }

  ngOnInit() {
  }

}
