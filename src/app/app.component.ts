import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Movie } from './model/movie';
import { MoviesService } from './service/movies.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 initialDatas:Movie[];
 searchMovie:Movie;
 inputSearch:String;
 langFr:string = "fr"
 langUs:string = "us"

 myGroup = new FormGroup({
  title: new FormControl()
})

 constructor(private service : MoviesService, public translate: TranslateService){
    translate.addLangs(['fr', 'us']);
    translate.setDefaultLang('fr');
  } 
 

 ngOnInit(): void {
   this.initialDatas = this.service.getMovies();
 }

  scrollToUp(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  chooseLanguage(lang:string){
    this.translate.use(lang);
  }

}
