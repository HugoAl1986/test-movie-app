import { Injectable } from '@angular/core';
import { MOVIELIST } from '../mock-movie-list';
import { Movie } from '../model/movie';
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getMovies():Movie[]{
    return MOVIELIST;
  }

  updateMovie(movie:Movie){
    console.log(movie);
   for(let index = 0; index < MOVIELIST.length; index ++){
    if(MOVIELIST[index].id == movie.id){
      MOVIELIST[index] = movie;
      break
    }
   }
   
   }

  
  
}
