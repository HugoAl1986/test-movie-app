<<<<<<< HEAD
import { Component, Input } from '@angular/core';
import { Movie } from './model/movie';
=======
import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Movie } from './model/movie';
import { MoviesService } from './service/movies.service';
>>>>>>> newFeature

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
<<<<<<< HEAD
export class AppComponent {

  foundMovie:Movie;
  searchDone:boolean=false;
  
  getFoundMovie($event:Movie){
    this.foundMovie = $event;
    this.searchDone = true;
  }
=======
export class AppComponent implements OnInit{
 initialDatas:Movie[];
 searchMovie:Movie;
 inputSearch:String;

 myGroup = new FormGroup({
  title: new FormControl()
})

 constructor(private service : MoviesService){
 }

 ngOnInit(): void {
   this.initialDatas = this.service.getMovies();
 }

  scrollToUp(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

>>>>>>> newFeature
}
