import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-stat-display',
  templateUrl: './stat-display.component.html',
  styleUrls: ['./stat-display.component.scss']
})
export class StatDisplayComponent implements OnInit {

  displayedColumns = ['team_full', 'avg', 'hr', 'rbi', 'sb', 'ab', 'g', ];

@Input() results: []
  constructor(  ) { }

  ngOnInit() {
  }

}







