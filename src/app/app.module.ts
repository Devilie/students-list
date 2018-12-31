import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { AddFormComponent } from './students/add-form/add-form.component';
import { ChangeFormComponent } from './students/change-form/change-form.component';
import { StudentsListComponent } from './students/students-list/students-list.component';
import { StudentService } from './shared/student.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AddFormComponent,
    ChangeFormComponent,
    StudentsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
