import { Injectable } from '@angular/core';
import { MOVIELIST } from '../mock-movie-list';
import { Movie } from '../model/movie';
import { from, find, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  constructor() { }

  movieList = from(MOVIELIST);

  

  getMovies():Observable<Movie>{
    return this.movieList;
  }

  getMovie(title:string):Observable<Movie | undefined>{
    return this.movieList.pipe(
      find((data:Movie) => data.primaryTitle == title)
    );
  }

  findMovieByName(title:string):Movie[] | undefined{
    console.log(MOVIELIST.filter(movie => movie.primaryTitle.startsWith(title)))
    return MOVIELIST.filter(movie => movie.primaryTitle.startsWith(title));
  }
}
