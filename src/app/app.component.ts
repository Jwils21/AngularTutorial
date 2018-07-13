import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Jonathan's App";
  sometext = 'My Text';

  onclick(): void {
  	this.sometext = "This is some text."
  }
}
