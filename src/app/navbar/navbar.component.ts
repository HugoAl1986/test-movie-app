import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { Movie } from '../model/movie';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{

  constructor(private service:MoviesService) { }

  @Output() newEvent = new EventEmitter<Movie>();
  title:string = '';
  movieSearched:Movie;

  onSubmitForm() {
    this.service.getMovie(this.title).subscribe((data:any)=>this.movieSearched = data);  
    this.newEvent.emit(this.movieSearched);
  }

}
