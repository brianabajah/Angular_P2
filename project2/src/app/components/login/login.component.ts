import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { format } from  "url";
import {User} from "../models/user";
import {Router} from '@angular/router';
import { from } from 'rxjs';

// import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient , private router:Router) { }

  ngOnInit() {}

  submit(loginf:NgForm){
    this.http.post("https://ebb8cab7-daa4-475c-917c-d5a38ae7e773.mock.pstmn.io/feed"
    ,{
      username:loginf.value.username,
      password:loginf.value.password
    })
    .toPromise().then(
      (r:{ 
      username:string;
      email:string;
      profile:string;
      birthday:string})=>{
      localStorage.setItem("current",JSON.stringify(r));
      // this.navigateToLogin();
    })
    this.navigateToLogin();
  }

  navigateToLogin() {
    let words:string=localStorage.getItem("current");
    if(words!=null && words.length>1 ){
    this.router.navigateByUrl('/main-feed');
    }
 }

}