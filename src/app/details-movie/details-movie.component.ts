import { Component, OnInit, OnChanges } from '@angular/core';
import { BsModalRef} from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalOptions } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.scss']
})
export class DetailsMovieComponent{


  closeBtnName?: string;
  movie:any;
  profileForm:FormGroup;
  years:Array<number> = [];

  constructor(public bsModalRef: BsModalRef,public options: ModalOptions) { 
    for(let i=1870;i<=2000;i++){
      this.years.push(i);
    }
    this.movie = this.options.initialState?.['data'];
    this.profileForm = new FormGroup({
      runtimeMinutes: new FormControl(this.movie?.runtimeMinutes,Validators.requiredTrue),
      startYear: new FormControl(this.movie?.startYear),
    });  
  }

  onSubmit(){
    console.log(this.profileForm.errors);

  }


}
