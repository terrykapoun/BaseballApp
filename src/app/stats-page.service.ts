import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StatsPageService {

  constructor(private http: HttpClient) { }

  getSearchResults(season: number, player_id: number){
     return this.http.get(`http://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season=${season}&player_id=${player_id}`).pipe(
     map((res: []) => res['sport_hitting_tm'].queryResults.row))
      
  }
}



