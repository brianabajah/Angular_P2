import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getPosts(){

    return this.http.get('http://localhost:8080/ProjectTwo/users/login.app');

   

  }
  
  commentServ(loginf:NgForm){
    return this.http.post("http://localhost:8080/ProjectTwo/auth/login.app"
    ,{
      username:loginf.value.username
    });
  }
}
