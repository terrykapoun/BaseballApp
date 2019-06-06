import { Component, OnInit } from '@angular/core';
import { StatsPageService } from '../stats-page.service';
import { Stats } from '../stat-display/stats-model';
@Component({
  selector: 'app-stats-page',
  templateUrl: './stats-page.component.html',
  styleUrls: ['./stats-page.component.scss']
})
export class StatsPageComponent implements OnInit {
  
  season: number;
  player_id: number;
  results: Stats [] = [];
  
  constructor( private statsPageService: StatsPageService ) { }

  getSearch(){
    this.statsPageService.getSearchResults(this.season, this.player_id).subscribe(res => {
     if(typeof res === "object"){
      this.results=[res];
      } else{
        this.results = res;
      }
      console.log(res);
    })
  }
    
  years = [
    {name: '2019', abbreviation: '2019'},
    {name: '2018', abbreviation: '2018'},
    {name: '2017', abbreviation: '2017'},
    {name: '2016', abbreviation: '2016'},
    {name: '2015', abbreviation: '2015'},
    {name: '2014', abbreviation: '2014'},
    {name: '2013', abbreviation: '2013'},
    {name: '2012', abbreviation: '2012'},
    {name: '2011', abbreviation: '2011'},
    {name: '2010', abbreviation: '2010'},
    {name: '2009', abbreviation: '2009'},
    {name: '2008', abbreviation: '2008'},
    {name: '2007', abbreviation: '2007'},
    {name: '2006', abbreviation: '2006'},
    {name: '2005', abbreviation: '2005'},
    {name: '2004', abbreviation: '2004'},
    {name: '2003', abbreviation: '2003'},
    {name: '2002', abbreviation: '2002'},
    {name: '2001', abbreviation: '2001'},
    
  ];
   

  ngOnInit() {
  }

}
