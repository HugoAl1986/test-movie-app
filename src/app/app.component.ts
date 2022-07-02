import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-movie-app';

  scrollToUp(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
