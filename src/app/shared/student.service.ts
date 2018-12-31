import { Injectable } from '@angular/core';
import { Student } from './Student';
import { students } from './data';

@Injectable()
export class StudentService {
  students: Student[] = students;
  detStudents(): Student[] {
    return this.students
  }
  createStudent(newStudent: {
    first_name: string,
    last_name: string,
    birth_date: string,
    phone: string,
    email: string
  }) {
    let date: string = new Date().toDateString();
    let student: Student = new Student(this.students.length,
      newStudent.first_name,
      newStudent.last_name,
      newStudent.birth_date,
      newStudent.phone,
      newStudent.email, date, date);
    this.students.push(student);
  }
  deleteStudent(student: Student) {
    let deleted: number;
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id === student.id) {
        deleted = i;
      }
    }
    this.students.splice(deleted, 1);
  }
  changeStudent(student: Student) {
    let date: string = new Date().toDateString();
    let changeStud = {
      id: student.id, first_name: student.first_name, last_name: student.last_name, birth_date: student.birth_date,
      phone: student.phone, email: student.email, created: student.created, changed: student.changed
    };

    changeStud.changed = date;

    for (let stud of this.students) {
      console.log(stud);
      if (stud.id === changeStud.id) {
        stud = changeStud;
      }
      console.log(stud);
    }

  }
}
