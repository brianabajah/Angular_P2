import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get("http://localhost:8080/ProjectTwo/users/getAllPosts.app");
  }
  ////getting posts main 
  
  commentServ(loginf:NgForm){
    return this.http.post("https://ebb8cab7-daa4-475c-917c-d5a38ae7e773.mock.pstmn.io/feed"
    //comments of the posts
    ,{
      username:loginf.value.username
    });
  }
}
