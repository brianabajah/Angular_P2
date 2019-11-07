import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getPosts(){
<<<<<<< HEAD
    return this.http.get('http://localhost:8080/ProjectTwo/users/login.app');
=======
    return this.http.get('https://ebb8cab7-daa4-475c-917c-d5a38ae7e773.mock.pstmn.io/feed');
>>>>>>> master
  }
  
  commentServ(loginf:NgForm){
    return this.http.post("https://ebb8cab7-daa4-475c-917c-d5a38ae7e773.mock.pstmn.io/feed"
    ,{
      username:loginf.value.username
    });
  }
}
