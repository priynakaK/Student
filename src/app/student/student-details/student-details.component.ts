import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Studentinterface } from '../studentinterface';

@Component({
  standalone: true,
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
  imports: [CommonModule],
})
export class StudentDetailsComponent implements OnInit {
  @Input() s1!: Studentinterface;
  constructor() {}

  ngOnInit() {}
}
