import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	names = [];

	name: string;
	nbr: number;
	amount: number;

	add(): void {
		let obj = {
			name: this.name,
			nbr: this.nbr,
			amount: this.amount
		}
		this.names.push(obj);
		this.name = "";
		this.nbr = 0;
		this.amount = 0;
		console.log(this.names);
	}



  title: string = 'Jon';
  // sometext = 'my text';

  // displayName: boolean = true;

  // fv = "FV";
  // fnv = "FNV";
  // mv = "MV";
  // mnv = "MNV";

  // names = [
  //   { name: "Michael",   tag: 4, abool: true },
  //   { name: "Dan",       tag: 3, abool: false }, 
  //   { name: "Anna",      tag: 1, abool: true },
  //   { name: "Marcus",    tag: 4, abool: false },
  //   { name: "Foster",    tag: 4, abool: true },
  //   { name: "Jonathan",  tag: 4, abool: false },
  //   { name: "Larry",     tag: 3, abool: true }
  // ];

  // aMessage = "Starting Message";

  // toggle(): void {
  //   this.displayName = !this.displayName;
  // }
  // onclick(): void {
  //   this.sometext = "This is some text";
  // }
}