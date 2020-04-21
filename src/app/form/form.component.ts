import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Studentdata} from '../studentdata';
import * as $ from 'jquery';
import { RouterLink, RouterOutlet, OutletContext,Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private service: StudentService,private router: Router) {}
  checkboxs = [];
  student: Studentdata = new Studentdata();

  ngOnInit(): void {
  }
  onSubmit(){  
    this.removeNulls();
    if (!this.validate()){
      return;
    }
    this.student.checkbox = this.checkboxs.join();
    
    this.service.addStudent(this.student).subscribe(()=>{
      console.log("Request to add student completed");
      this.router.navigate(['/app-all-students']);
      
    });
    
  }

  setIt(key,value){
    if(!value){
      return "";
    }
    return value;
  }
    
  onCheckboxChange(event, value) {
    if (event.target.checked) {
      this.checkboxs.push(value);
    } 
    if (!event.target.checked) {
      let index = this.checkboxs.indexOf(value);
      if (index > -1) {
        this.checkboxs.splice(index, 1);
      }
    }
  }
  removeNulls(){
    this.student.userid = this.setIt("userid",this.student.userid);
    this.student.firstname = this.setIt("firstname",this.student.firstname);
    this.student.lastname = this.setIt("lastname",this.student.lastname);
    this.student.address = this.setIt("address",this.student.address);
    this.student.city = this.setIt("city",this.student.city);
    this.student.state = this.setIt("state",this.student.state);
    this.student.zipcode = this.setIt("zipcode",this.student.zipcode);
    this.student.phone = this.setIt("phone",this.student.phone);
    this.student.email = this.setIt("email",this.student.email);
    this.student.user_DATE = this.setIt("user_DATE",this.student.user_DATE);
    this.student.checkbox = this.setIt("checkbox",this.student.checkbox);
    this.student.radio = this.setIt("radio",this.student.radio);
    this.student.selection = this.setIt("selection",this.student.selection);
  }

  validate() {
    $("#valErrors").empty();
    var invalid = [];
    var radioCount = this.radio('interest');

    if (radioCount ==0){
      invalid.push("<li>Please select how you became interested in the university</li>");
    }
    var checkedCount = this.checkBoxes('campus');
    if (checkedCount<2){
      invalid.push("<li>Please select 2 or more things you liked about the campus</li>");
    }

    if (this.alphabets(this.student.firstname) == false){
      invalid.push("<li> firstname can only contain alphabet characters </li>");
    }
    if (this.alphabets(this.student.lastname) == false){
      invalid.push("<li> lastname can only contain alphabet characters </li>");
    }
    if (this.alphanumeric(this.student.userid) == false){
      invalid.push("<li> userid can only contain alphanumeric values</li>");
    }
    if (this.alphabets(this.student.city) == false){
      invalid.push("<li> city can only contain alphabet characters </li>");
    }
    if (this.alphabets(this.student.state) == false){
      invalid.push("<li> state can only contain alphabet characters </li>");
    }
    if (this.numeric(this.student.zipcode) == false){
      invalid.push("<li> zip can only contain numeric values</li>");
    }
    if (this.alphanumeric(this.student.address) == false){
      invalid.push("<li> address can only contain alphanumeric values</li>");
    }
    if (this.validEmail(this.student.email) == false){
      invalid.push("<li> Your email is not a valid email address</li>");
    }

    if(invalid.length <1){
      return true;
    }else{
      invalid.forEach(element =>
        $("#valErrors").append(element)
      )
      return false; 
    }
  }

  checkBoxes(txt){
    var count=0;
    $("input[type='checkbox'][name=" + txt +" ]").each(function(i, element){
      if ($(element).is(":checked")){
        count++;
      }
    });
    return count;
  }

  radio(txt){
    var count=0;
    $("input[type='radio'][name=" + txt +" ]").each(function(i, element){
      if ($(element).is(":checked")){
        count++;
      }
    });
    return count;
  }
  alphabets(txt)
    {
     var letters = /^[A-Za-z]+$/;
     if(txt.match(letters))
     {return true;}
     else
     {return false;}
  }
  alphanumeric(txt)
  {
   var chars = /^[0-9a-zA-Z]+$/;
   if(txt.match(chars)) 
    {return true;}
  else
    {return false;}
  }
  validEmail(txt)
  {
   var chars = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(txt.match(chars)) 
    {return true;}
  else
    {return false;}
  }
  numeric(txt)
  {
   var chars = /^\d+$/;
   if(txt.match(chars)) 
    {return true;}
  else
    {return false;}
  }

}
