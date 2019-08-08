import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-id-number',
  templateUrl: './id-number.component.html',
  styleUrls: ['./id-number.component.scss']
})
export class IdNumberComponent implements OnInit {

  displayedColumns = ['player_id',];

@Input() idResults: []

  constructor() { }

  ngOnInit() {
  }

}
