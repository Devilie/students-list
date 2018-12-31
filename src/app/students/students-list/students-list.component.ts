import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Student } from '../../shared/Student';
import { StudentService} from '../../shared/student.service';
@Component({
  moduleId: module.id,
  selector: 'app-students-list',
  templateUrl: 'students-list.component.html',
  styleUrls: ['students-list.component.css']
})
export class StudentsListComponent implements OnInit{
 students: Student[];

  constructor(private studentService: StudentService){
    this.students = [];
  }
  ngOnInit(){
    this.students = this.studentService.detStudents();
  }

  
  @Output() changing: boolean = false;

  delete(student: Student) {
    this.studentService.deleteStudent(student);
  };

  change(student: Student) {
this.studentService.changeStudent(student);
    this.changing = true;
  }

}