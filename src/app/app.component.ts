import { Component } from '@angular/core';

const students = [{
  "id": 1,
  "name": {
    "first_name": "Brandon",
    "last_name": "Adair"
  },
  "birth_date": "13-12-1998",
  "phone": "1-555-555-3612",
  "email": "Brandon.Adair@powerschool.com",
  "created": "12-08-2016",
  "changed": "13-09-2017"
},
{
  "id": 2,
  "name": {
    "first_name": "Corby",
    "last_name": "Adams"
  },
  "birth_date": "02-10-2000",
  "phone": "1-555-555-2892",
  "email": "Corby.Adams@powerschool.com",
  "created": "15-07-2017",
  "changed": "15-07-2017"
},
{
  "id": 3,
  "student_username": "ag1student4",
  "name": {
    "first_name": "Emmy",
    "last_name": "Ahlberg"
  },
  "birth_date": "21-11-2000",
  "phone": "1-555-555-3558",
  "email": "Emmy.Ahlberg@powerschool.com",
  "created": "02-07-2017",
  "changed": "02-07-2017"
},
{
  "id": 4,
  "name": {
    "first_name": "Andy",
    "last_name": "Aikinson"
  },
  "birth_date": "27-06-1997",
  "phone": "1-555-555-3552",
  "email": "Andy.Aikinson@powerschool.com",
  "created": "01-07-2016",
  "changed": "21-09-2017"
},
{
  "id": 5,
  "name": {
    "first_name": "Scott",
    "last_name": "Alfonso"
  },
  "birth_date": "17-11-1999",
  "phone": "1-555-555-2569",
  "email": "Scott.Alfonso@powerschool.com",
  "created": "20-10-2017",
  "changed": "20-10-2017"
},
{
  "id": 6,
  "name": {
    "first_name": "Victor",
    "last_name": "Allen"
  },
  "birth_date": "16-01-1999",
  "phone": "1-555-555-3567",
  "email": "Victor.Allen@powerschool.com",
  "created": "21-10-2017",
  "changed": "21-10-2017"
},
{
  "id": 7,
  "name": {
    "first_name": "Alfred",
    "last_name": "Allred"
  },
  "birth_date": "02-05-1999",
  "phone": "1-555-555-2209",
  "email": "Alfred.Allred@powerschool.com",
  "created": "16-08-2017",
  "changed": "16-08-2017"
},
{
  "id": 8,
  "name": {
    "first_name": "Christopher",
    "last_name": "Allred"
  },
  "birth_date": "21-10-1999",
  "phone": "1-555-555-3555",
  "email": "Christopher.Allred@powerschool.com",
  "created": "16-08-2017",
  "changed": "16-08-2017"

},
{
  "id": 9,
  "name": {
    "first_name": "Jacee",
    "last_name": "Allred"
  },
  "birth_date": "28-03-1998",
  "phone": "1-555-555-1726",
  "email": "Jacee.Allred@powerschool.com",
  "created": "15-09-2016",
  "changed": "15-09-2016"

},
{
  "id": 10,
  "name": {
    "first_name": "Harold",
    "last_name": "Almanza"
  },
  "birth_date": "19-08-1999",
  "phone": "1-555-555-3553",
  "email": "Harold.Almanza@powerschool.com",
  "created": "08-07-2017",
  "changed": "08-07-2017"

}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Srudents List';
  students = students;
}
