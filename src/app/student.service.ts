import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Studentdata} from './studentdata';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  constructor(private http:HttpClient) {}

  getStudent(studentId: any):Observable<Studentdata>{
    let temp = this.http.get<Studentdata>(`http://3.90.123.224:30001/swe_hw3/api/studentinfo/${studentId}`);
    return temp;
  }

  addStudent(student: Studentdata){
    let options = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
    let jsonRequest = JSON.stringify(student);
    console.log(jsonRequest);
    return this.http.post<Studentdata>(`http://3.90.123.224:30001/swe_hw3/api/studentinfo/addStudent`,jsonRequest, options);

  }

  getAllStudents():Observable<any>{
    return this.http.get<any>(`http://3.90.123.224:30001/swe_hw3/api/studentinfo/`);
  }

}
