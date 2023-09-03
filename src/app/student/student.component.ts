import { Component, OnInit } from '@angular/core';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { Studentinterface } from './studentinterface';

@Component({
  standalone: true,
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  imports: [StudentDetailsComponent],
})
export class StudentComponent implements OnInit {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  s1: Studentinterface = {
    photo: `${this.baseUrl}/example-house.jpg`,
    roll: 1,
    name: 'Priyanka',
  };
  constructor() {}

  ngOnInit() {}
}
