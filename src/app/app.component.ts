import { Component } from '@angular/core';

class Student {
  constructor(public id: number,
    public first_name: string,
    public last_name: string,
    public birth_date: string,
    public phone: string,
    public email: string,
    public created: string,
    public changed: string) { }
};

const students: Student[] = [
  {
    "id": 1,
    "first_name": "Brandon",
    "last_name": "Adair",
    "birth_date": "1998-12-13",
    "phone": "1-555-555-3612",
    "email": "Brandon.Adair@powerschool.com",
    "created": "2016-08-12",
    "changed": "2017-09-13"
  },
  {
    "id": 2,
    "first_name": "Corby",
    "last_name": "Adams",
    "birth_date": "2000-10-02",
    "phone": "1-555-555-2892",
    "email": "Corby.Adams@powerschool.com",
    "created": "2017-07-15",
    "changed": "2017-07-15"
  },
  {
    "id": 3,
    "first_name": "Emmy",
    "last_name": "Ahlberg",
    "birth_date": "2000-11-21",
    "phone": "1-555-555-3558",
    "email": "Emmy.Ahlberg@powerschool.com",
    "created": "2017-07-02",
    "changed": "2017-07-02"
  },
  {
    "id": 4,
    "first_name": "Andy",
    "last_name": "Aikinson",
    "birth_date": "1997-06-27",
    "phone": "1-555-555-3552",
    "email": "Andy.Aikinson@powerschool.com",
    "created": "01-07-2016",
    "changed": "21-09-2017"
  },
  {
    "id": 5,
    "first_name": "Scott",
    "last_name": "Alfonso",
    "birth_date": "1999-11-17",
    "phone": "1-555-555-2569",
    "email": "Scott.Alfonso@powerschool.com",
    "created": "2017-10-20",
    "changed": "2017-10-20"
  },
  {
    "id": 6,
    "first_name": "Victor",
    "last_name": "Allen",
    "birth_date": "1999-01-16",
    "phone": "1-555-555-3567",
    "email": "Victor.Allen@powerschool.com",
    "created": "2017-10-21",
    "changed": "2017-10-21"
  },
  {
    "id": 7,
    "first_name": "Alfred",
    "last_name": "Allred",
    "birth_date": "1999-05-02",
    "phone": "1-555-555-2209",
    "email": "Alfred.Allred@powerschool.com",
    "created": "2017-08-16",
    "changed": "2017-08-16"
  },
  {
    "id": 8,
    "first_name": "Christopher",
    "last_name": "Allred",
    "birth_date": "1999-10-21",
    "phone": "1-555-555-3555",
    "email": "Christopher.Allred@powerschool.com",
    "created": "2017-08-16",
    "changed": "2017-08-16"
  },
  {
    "id": 9,
    "first_name": "Jacee",
    "last_name": "Allred",
    "birth_date": "1998-03-28",
    "phone": "1-555-555-1726",
    "email": "Jacee.Allred@powerschool.com",
    "created": "2016-09-15",
    "changed": "2016-09-15"
  },
  {
    "id": 10,
    "first_name": "Harold",
    "last_name": "Almanza",
    "birth_date": "1999-08-19",
    "phone": "1-555-555-3553",
    "email": "Harold.Almanza@powerschool.com",
    "created": "2017-07-08",
    "changed": "2017-07-08"
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Srudents List';
  students: Student[] = students;
  changing: boolean = false;
  newStudent: {
    first_name: string,
    last_name: string,
    birth_date: string,
    phone: string,
    email: string
  } = {
      first_name: '', last_name: '', birth_date: '', phone: '', email: ''
    };
  changeStud: Student = {
    id: NaN, first_name: '', last_name: '', birth_date: '', phone: '', email: '', created: '', changed: ''
  };
  create() {
    let date: string = new Date().toDateString();

    let student: Student = new Student(this.students.length,
      this.newStudent.first_name,
      this.newStudent.last_name,
      this.newStudent.birth_date,
      this.newStudent.phone,
      this.newStudent.email, date, date);

    this.students.push(student);
    this.newStudent = {
      first_name: '', last_name: '', birth_date: '', phone: '', email: ''
    };
  };

  delete(student: Student) {

    let deleted: number;
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id === student.id) {
        deleted = i;
      }
    }
    this.students.splice(deleted, 1);
  };

  change(student: Student) {
    this.changing = true;
    this.changeStud = {
      id: student.id, first_name: student.first_name, last_name: student.last_name, birth_date: student.birth_date,
      phone: student.phone, email: student.email, created: student.created, changed: student.changed
    };
  };

  saveChanges() {
    let date: string = new Date().toDateString();

    this.changeStud.changed = date;

    for (let stud of this.students) {
      console.log(stud);
      if (stud.id === this.changeStud.id) {
        stud = this.changeStud;
      }
      console.log(stud);
    }

    this.changeStud = {
      id: NaN, first_name: '', last_name: '', birth_date: '', phone: '', email: '', created: '', changed: ''
    };
    this.changing = false;
  };
}
