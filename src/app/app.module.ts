import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './component/movies/movies.component';
import { DetailsMovieComponent } from './details-movie/details-movie.component';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from './component/pagination/pagination.component'; 
import {NgxPaginationModule} from 'ngx-pagination'
>>>>>>> newFeature

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    DetailsMovieComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule
=======
    Ng2SearchPipeModule,
    NgxPaginationModule,
    ReactiveFormsModule
>>>>>>> newFeature
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
