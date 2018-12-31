import { Component, Output, EventEmitter } from '@angular/core';
import { StudentService } from '../../shared/student.service';
@Component({
  moduleId: module.id,
  selector: 'app-add-form',
  templateUrl: 'add-form.component.html',
  styleUrls: ['add-form.component.css']
})
export class AddFormComponent {
  open_create_form: boolean = false;

  click() {
    this.open_create_form = true;
    console.log("click")
  }
  constructor(private studentService: StudentService){
  }
  ngOnInit(){
  }
  newStudent: {
    first_name: string,
    last_name: string,
    birth_date: string,
    phone: string,
    email: string
  } = {
      first_name: '', last_name: '', birth_date: '', phone: '', email: ''
    };

  @Output() create: EventEmitter<{}> = new EventEmitter();
  onSubmit() {
    this.studentService.createStudent(this.newStudent);
    console.log(this.newStudent);
    this.open_create_form = false;
  }

}
