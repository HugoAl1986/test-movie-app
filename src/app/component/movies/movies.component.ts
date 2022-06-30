import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { MoviesService } from 'src/app/service/movies.service';




@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnChanges  {

  @Input() shareFoundMovie:Movie;
  @Input() searchResult:Boolean;
  movieFound:Movie;
  movieList:any = [];

  constructor(private service: MoviesService) { }

  ngOnChanges() : void{
    console.log(this.searchResult);
    if(this.searchResult == false){
      this.service.getMovies().pipe(map(
        (data:Movie) => this.movieList.push(data)
      )).subscribe()
    }else{
      this.movieList = [];
      this.movieList.push(this.shareFoundMovie);
      
    }
  }
}
