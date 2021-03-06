import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';
import { FilterPipe } from 'src/app/pipes/filter.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FilterPipe]
})
export class HomeComponent implements OnInit {

  public data: Array<any>;
  public totalRecord: string;
  public page: number = 1;
  
  public dataTeam: any;
  public currentId: number = 0;
  public term: any;

  constructor(private playerservices: PlayersService) { 
    this.data = new Array<any>();
  }

  ngOnInit() {
    this.getAllPlayers();
  }

  getAllPlayers(){
    this.playerservices.getAllPlayers().subscribe((response) => {
      console.log("DATA PLAYERS", response);
      this.data = response.data;
      // this.totalRecord = response.results.length;
    })
  }

  getSpecificTeam(id: number){
    this.playerservices.getSpecificTeam(id).subscribe((response) => {
      this.currentId = id;
      this.dataTeam = response;
      console.log("DATA PLAYERS SPECIFICS", response);
      console.log("CURRENT ID", id);
    })
  }

}
