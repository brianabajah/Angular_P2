import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  submit(loginf:NgForm){
   return this.http.post("https://ebb8cab7-daa4-475c-917c-d5a38ae7e773.mock.pstmn.io/feed"
    ,{
      username:loginf.value.username,
      password:loginf.value.password
    });
  }
}
