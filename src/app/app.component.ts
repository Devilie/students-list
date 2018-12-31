import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title: string = 'Students List';
  // create(newStudent: {
  //   first_name: '', last_name: '', birth_date: '', phone: '', email: ''
  // }) {
  //   let date: string = new Date().toDateString();

  //   let student: Student = new Student(this.students.length,
  //     newStudent.first_name,
  //     newStudent.last_name,
  //     newStudent.birth_date,
  //     newStudent.phone,
  //     newStudent.email, date, date);

  //   this.students.push(student);
  //   newStudent = {
  //     first_name: '', last_name: '', birth_date: '', phone: '', email: ''
  //   };
  // };
}
