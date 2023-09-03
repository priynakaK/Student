import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { Studentinterface } from './studentinterface';

@Component({
  standalone: true,
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  imports: [StudentDetailsComponent, FormsModule, CommonModule],
})
export class StudentComponent implements OnInit {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  s1: Studentinterface[] = [
    {
      photo: `${this.baseUrl}/example-house.jpg`,
      roll: 1,
      name: 'Priyanka',
    },
    {
      photo: `${this.baseUrl}/example-house.jpg`,
      roll: 2,
      name: 'Vinay',
    },
    {
      photo: `${this.baseUrl}/example-house.jpg`,
      roll: 3,
      name: 'Gururaj',
    },
    {
      photo: `${this.baseUrl}/example-house.jpg`,
      roll: 4,
      name: 'Yashraj',
    },
    {
      photo: `${this.baseUrl}/example-house.jpg`,
      roll: 1,
      name: 'Priyanka',
    },
    {
      photo: `${this.baseUrl}/example-house.jpg`,
      roll: 2,
      name: 'Vinay',
    },
    {
      photo: `${this.baseUrl}/example-house.jpg`,
      roll: 3,
      name: 'Gururaj',
    },
    {
      photo: `${this.baseUrl}/example-house.jpg`,
      roll: 4,
      name: 'Yashraj',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
