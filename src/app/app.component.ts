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
 langFr:string = "fr";
 langUs:string = "us";
 opacityFr:string="0.5";
 opacityUs:string = "0.5";

 myGroup = new FormGroup({
  title: new FormControl()
})

 constructor(private service : MoviesService, public translate: TranslateService){
    translate.addLangs(['fr', 'us']);
    translate.setDefaultLang('fr');
    this.opacityFr = "1";
  } 
 

 ngOnInit(): void {
   this.initialDatas = this.service.getMovies();
 }

  chooseLanguage(lang:string){
    this.translate.use(lang);
    if(lang == 'fr'){
      this.opacityFr = "1";
      this.opacityUs = "0.5";
    } else{
      this.opacityUs = "1";
      this.opacityFr = "0.5";
    }
  }

}