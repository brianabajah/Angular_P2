import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  submit(loginf:NgForm){
   return this.http.post("http://localhost:8080/ProjectTwo/auth/login.app"
    ,{
      username:loginf.value.username,
      password:loginf.value.password
    });
  }
}
