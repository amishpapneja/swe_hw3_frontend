import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: StudentService) { }
  students:any;

  ngOnInit(): void {
 this.service.getAllStudents().subscribe((students:any)=>{
   console.log("All students call was just made!!");
   this.students=students;
 });
  }

}
