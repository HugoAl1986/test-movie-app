import { Component } from '@angular/core';
import { Movie } from './model/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  findedMovie:Movie | undefined;
  
  getFoundMovie(movie : Movie){
    console.log(movie);
  }
}
