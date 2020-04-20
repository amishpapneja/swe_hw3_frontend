import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute} from '@angular/router';
import { Studentdata } from '../studentdata'


@Component({
  selector: 'app-studentinfo',
  templateUrl: './studentinfo.component.html',
  styleUrls: ['./studentinfo.component.css']
})
export class StudentinfoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: StudentService, private changeDetector: ChangeDetectorRef) { }
  student: Studentdata = new Studentdata();
  studentId: any;


  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.studentId = params['id'];
      console.log("student id received from paarameter is: " ,this.studentId);
      this.service.getStudent(this.studentId).subscribe((received_student:any)=>{
        this.student=received_student;
      });
      
    });
    // this.service.getStudent(this.studentId).subscribe(data=>{
      
    //   this.student.userid = data['userid'];
    //   this.student.firstname = data['firstname'];
    //   this.student.lastname = data['lastname'];
    //   this.student.address = data['address'];
    //   this.student.city = data['city'];
    //   this.student.state = data['state'];
    //   this.student.zipcode = data['zipcode'];
    //   this.student.phone = data['phone'];
    //   this.student.email = data['email'];
    //   this.student.user_DATE = data['user_date'];
    //   this.student.checkbox = data['checkbox'];
    //   this.student.radio = data['radio'];
    //   this.student.selection = data['selection'];
      
    // });
  }

}
