import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { AddFormComponent } from './students/add-form/add-form.component';
import { ChangeFormComponent } from './students/change-form/change-form.component';
import { StudentsListComponent } from './students/students-list/students-list.component';
import { StudentItemComponent } from './students/student-item/student-item.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AddFormComponent,
    ChangeFormComponent,
    StudentsListComponent,
    StudentItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
