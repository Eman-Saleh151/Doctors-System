import { Component } from '@angular/core';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // faCoffee = faCoffee;
  title = 'Doctors List';
  add(value:any){
    this.title=value;
    // console.log(value)
  }
}
