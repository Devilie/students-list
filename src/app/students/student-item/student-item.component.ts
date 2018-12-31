import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../shared/Student';

@Component({
  moduleId: module.id,
  selector: 'app-student-item',
  templateUrl: 'student-item.component.html',
  styleUrls: ['student-item.component.css']
})
export class StudentItemComponent {

  @Input() student: Student;

  @Output() delete = new EventEmitter();
  @Output() change = new EventEmitter();

  onDelete() {
    this.delete.emit(this.student);
  }

  onChange(){
    this.change.emit(this.student);
  }
  
}
