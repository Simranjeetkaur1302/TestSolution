import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  static serviceUrl: ' http://localhost:3000/employees';
	private serviceUrl = ' http://localhost:3000/employees';
	
	

  constructor(private http: Http) { }
  
  getUser(){

  // this.http.get(this.serviceUrl).map((response)=> response.json());



  //  this.http.get(this.serviceUrl).subscribe((res)=>{
  //    console.log(res);
 // });

}


}
