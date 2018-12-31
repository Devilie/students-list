import { Component, OnInit } from '@angular/core';

import {Student} from '../shared/Student';
import {students} from '../shared/data';

@Component({
  moduleId: module.id,
  selector: 'app-students',
  templateUrl: 'students.component.html',
  styleUrls: ['students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  students: Student[] = students;
  changing: boolean = false;
  
  create() {
    let date: string = new Date().toDateString();

    // let student: Student = new Student(this.students.length,
    //   this.newStudent.first_name,
    //   this.newStudent.last_name,
    //   this.newStudent.birth_date,
    //   this.newStudent.phone,
    //   this.newStudent.email, date, date);

    // this.students.push(student);
    // this.newStudent = {
    //   first_name: '', last_name: '', birth_date: '', phone: '', email: ''
    // };
  };

  delete(student: Student) {

    // let deleted: number;
    // for (let i = 0; i < this.students.length; i++) {
    //   if (this.students[i].id === student.id) {
    //     deleted = i;
    //   }
    // }
    // this.students.splice(deleted, 1);
  };

  change(student: Student) {
    this.changing = true;
    // this.changeStud = {
    //   id: student.id, first_name: student.first_name, last_name: student.last_name, birth_date: student.birth_date,
    //   phone: student.phone, email: student.email, created: student.created, changed: student.changed
    // };
  };

  saveChanges() {
    let date: string = new Date().toDateString();

    // this.changeStud.changed = date;

    // for (let stud of this.students) {
    //   console.log(stud);
    //   if (stud.id === this.changeStud.id) {
    //     stud = this.changeStud;
    //   }
    //   console.log(stud);
    // }

    // this.changeStud = {
    //   id: NaN, first_name: '', last_name: '', birth_date: '', phone: '', email: '', created: '', changed: ''
    // };
    this.changing = false;
  };
}
