import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle = false;
  log = [];


  toggling() {
 this.toggle = !this.toggle;
 this.log.push(new Date())
  }
}
