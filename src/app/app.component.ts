import { Component, Input } from '@angular/core';
import { Movie } from './model/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  foundMovie:Movie;
  searchDone:boolean=false;
  
  getFoundMovie($event:Movie){
    this.foundMovie = $event;
    this.searchDone = true;
  }
}
