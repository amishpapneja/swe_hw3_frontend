import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentinfoComponent } from './studentinfo/studentinfo.component';
import { AllStudentsComponent } from './all-students/all-students.component';
import { FormComponent } from './form/form.component';

//re route to components
const routes: Routes = [
  {path: '', redirectTo: '/app-form', pathMatch: 'full'},
  {path: 'app-form', component: FormComponent},
  {path: 'app-studentinfo/:id', component: StudentinfoComponent},
  {path: 'app-all-students', component:AllStudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
