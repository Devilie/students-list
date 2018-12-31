import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-change-form',
  templateUrl: 'change-form.component.html',
  styleUrls: ['change-form.component.css']
})
export class ChangeFormComponent {
  changeStud = {
    id: NaN, first_name: '', last_name: '', birth_date: '', phone: '', email: '', created: '', changed: ''
  };

  @Output() saveChange: EventEmitter<{}> = new EventEmitter();

  onSaveChange(){
    this.saveChange.emit(this.changeStud);
  }

}