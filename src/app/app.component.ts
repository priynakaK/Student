import { Component, OnInit } from '@angular/core';
import { StudentComponent } from './student/student.component';

@Component({
  standalone: true,
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [StudentComponent],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
