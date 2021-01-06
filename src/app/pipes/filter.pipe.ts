import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(teams: any, term: string): any {
    // check if the search term is defined
    if(!teams || !term) return teams;

    return teams;
     teams.filter(function(team){
      return team.Animal.toLowerCase().includes(term.toLowerCase());
    })
  } 

}
