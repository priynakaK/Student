import { Injectable } from '@angular/core';
import { Studentinterface } from './student/studentinterface';

@Injectable()
export class StudentserviceService {
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

  getAllStudents(): Studentinterface[] {
    return this.s1;
  }
  getStudentByRoll(roll: number): Studentinterface | undefined {
    return this.s1.find(s1 => s1.roll === roll);
  }
  constructor() {}
}
