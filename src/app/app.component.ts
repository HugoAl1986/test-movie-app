import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Movie } from './model/movie';
import { MoviesService } from './service/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 initialDatas:Movie[];
 searchMovie:Movie;
 inputSearch:String;

 profileForm = new FormGroup({
  title: new FormControl('')
});

 constructor(private service : MoviesService){
 }

 ngOnInit(): void {
   this.initialDatas = this.service.getMovies();
 }

  scrollToUp(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  onSubmit(){
    console.log(this.profileForm.value);
   // return this.service.findMovieByName(this.profileForm.value);
  }
}
