import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { Studentinterface } from './studentinterface';
import { inject } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';

@Component({
  standalone: true,
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  imports: [StudentDetailsComponent, FormsModule, CommonModule],
})
export class StudentComponent implements OnInit {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  s1: Studentinterface[] = [];
  serv: StudentserviceService = inject(StudentserviceService);
  constructor() {
    this.s1 = this.serv.getAllStudents();
  }

  ngOnInit() {}
}
