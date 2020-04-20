import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentinfoComponent } from './studentinfo/studentinfo.component'
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AllStudentsComponent } from './all-students/all-students.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    StudentinfoComponent,
    AllStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
