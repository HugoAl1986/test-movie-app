import { Injectable } from '@angular/core';
import { MOVIELIST } from '../mock-movie-list';
import { Movie } from '../model/movie';
import { from, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  constructor() { }

  movieList:any = from(MOVIELIST);

  

  getMovies():any{
    return this.movieList;
  }

  getMovie(title:string):Movie | undefined{
    return MOVIELIST.find(movie => movie.primaryTitle.trim().toLowerCase() == title.trim().toLowerCase());
  }
}
