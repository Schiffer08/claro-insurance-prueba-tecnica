import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private url_api: string = "https://free-nba.p.rapidapi.com/";

  constructor(private http: HttpClient) {}

  getAllPlayers(): Observable<any> {
    return this.http.get(this.url_api + 'players');
  }

  getSpecificTeam(id_team): Observable<any> {
    return this.http.get(this.url_api + 'teams/' + id_team);
  }
}
