import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-add-form',
  templateUrl: 'add-form.component.html',
  styleUrls: ['add-form.component.css']
})
export class AddFormComponent {

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
    onSubmit(){
      this.create.emit(this.newStudent);
    }

}
