import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';
import { Movie } from 'src/app/model/movie';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movieList:Movie[];
  searchMovie:any;

  constructor(private service: MoviesService) { }

  ngOnInit(): void {
    this.movieList = this.service.getMovies();
  }
}
