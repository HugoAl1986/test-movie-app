import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { MoviesService } from 'src/app/service/movies.service';




@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movieList:any = [];

  constructor(private service: MoviesService) { }

  ngOnInit(): void {
    this.service.getMovies().pipe(map(
      data => this.movieList.push(data)
    )).subscribe()
}
}
