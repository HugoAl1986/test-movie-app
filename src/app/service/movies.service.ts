import { Injectable } from '@angular/core';
import { MOVIELIST } from '../mock-movie-list';
import { Movie } from '../model/movie';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getMovies():Movie[]{
    return MOVIELIST;
  }

  findMovieByName(title:string):Movie[] | undefined{
    console.log(MOVIELIST.filter(movie => movie.primaryTitle.startsWith(title)))
    return MOVIELIST.filter(movie => movie.primaryTitle.startsWith(title));
  }
}