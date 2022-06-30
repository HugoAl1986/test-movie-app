import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { Movie } from '../model/movie';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private service:MoviesService) { }

  title:string = '';

  ngOnInit(): void {
  }

  onSubmitForm() {
   this.service.getMovie(this.title)  
  }

}
