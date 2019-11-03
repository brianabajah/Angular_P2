import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { format } from  "url";

import {User} from "../models/user";
import {Router} from '@angular/router';

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
    this.http.post("https://bdf3d2a6-da4b-44a7-b837-434f6845961c.mock.pstmn.io/sam"
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
      console.log(r)
      // this.navigateToLogin();
    })
    // this.navigateToLogin();
  }

  navigateToLogin() {
    if(localStorage.getItem("current").length>2){
    this.router.navigateByUrl('/reg');
    }
 }

}
