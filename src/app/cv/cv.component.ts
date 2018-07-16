import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

	name: string = 'Jonathan Wilson';
	address: string = "3814 Gatewood Ln";
	tech: string = "MAX Technical Training";

	skills = ['C#', 'SQL', 'Angular'];

  constructor() { }

  ngOnInit() {
  }

}
