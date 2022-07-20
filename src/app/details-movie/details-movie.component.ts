import { Component, OnInit} from '@angular/core';
import { BsModalRef} from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalOptions } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.scss']
})
export class DetailsMovieComponent implements OnInit{


  closeBtnName?: string;
  movie:any;
  profileForm:FormGroup;
  years:Array<number> = [];

  constructor(public bsModalRef: BsModalRef,public options: ModalOptions) { 
    for(let i=1870;i<=2000;i++){
      this.years.push(i);
    }
    this.movie = this.options.initialState?.['data'];
     
  }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      runtimeMinutes: new FormControl(this.movie?.runtimeMinutes,Validators.required),
      startYear: new FormControl(this.movie?.startYear),
      endYear: new FormControl(parseInt(this.movie?.endYear),[
        Validators.min(parseInt(this.movie?.startYear))
      ]),
      genres: new FormControl(this.movie?.genres, Validators.required),
      isAdult:new FormControl(this.movie?.isAdult, Validators.required)
    }); 
  }

  onSubmit(){   
      console.log(this.profileForm.value); 
  }
}

