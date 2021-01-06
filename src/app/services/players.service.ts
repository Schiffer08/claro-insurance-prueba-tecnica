import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const headers = {
  "x-rapidapi-key" :
  "665ed21c81msh061a123159a7203p1bb178jsn2ddffd2c7093"
};

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private url_api: string = "https://free-nba.p.rapidapi.com/";


  constructor(private http: HttpClient) {}

  getAllPlayers(): Observable<any> {
    return this.http.get(this.url_api + 'players', {headers});
  }

  getSpecificTeam(id_team): Observable<any> {
    return this.http.get(this.url_api + 'teams/' + id_team, {headers});
  }
}
