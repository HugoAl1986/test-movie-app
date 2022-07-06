import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';
import { Movie } from 'src/app/model/movie';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent{

  @Input() movieList:Movie[] | undefined;
  @Input() searchMovie:any;
  page: number;

  constructor(private service: MoviesService) { }
  
}
