import { Component, Output, Input, EventEmitter } from '@angular/core';

import { Student } from '../../shared/Student';

@Component({
  moduleId: module.id,
  selector: 'app-students-list',
  templateUrl: 'students-list.component.html',
  styleUrls: ['students-list.component.css']
})
export class StudentsListComponent {
  @Input() students: Student[];

  @Output() delete: EventEmitter<Student> = new EventEmitter();
  @Output() change: EventEmitter<Student> = new EventEmitter();
  @Output() changing: boolean = false;
  onDelete(student: Student) {
    this.delete.emit(student);
  }
  onChange(student: Student) {
    this.change.emit(student);
  }

}