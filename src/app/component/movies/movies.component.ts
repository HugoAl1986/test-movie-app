import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';
import { Movie } from 'src/app/model/movie';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnChanges {

  @Input() movieList:Movie[];
  @Input() searchMovie:any;
  page: number = 1;
  totalPage:number;
  constructor(private service: MoviesService) { }

  ngOnInit(): void {
    this.totalPage = this.movieList.length; 
  }
  ngOnChanges(){
    console.log(this.searchMovie);
  }
  
}
