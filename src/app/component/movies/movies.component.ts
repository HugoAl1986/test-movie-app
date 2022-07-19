import { Component, Input} from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';
import { Movie } from 'src/app/model/movie';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { DetailsMovieComponent } from 'src/app/details-movie/details-movie.component';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent{

  bsModalRef?: BsModalRef;
  @Input() movieList:Movie[] | undefined;
  @Input() searchMovie:any;
  page: number;
  labels:any = {
    previousLabel : '<',
    nextLabel :'>'
  }

  constructor(private service: MoviesService, private modalService: BsModalService) { }

  openModalWithComponent(data:Movie) {
    const initialState: ModalOptions = {
      initialState: {
        data
      }
    };
    this.bsModalRef = this.modalService.show(DetailsMovieComponent, initialState);
  }
  
}
