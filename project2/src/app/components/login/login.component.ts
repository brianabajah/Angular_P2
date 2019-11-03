import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { format } from  "url";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit()  {}


  submission(form: NgForm){
    this.http
    .post("http://localhost:8080/Spring-MVC/auth.app", {
    //////last section of this matches the name of the controller
      name: form,
      age: form.value.age
      ///change this to username and password later
    })
    .toPromise()
    .then((r: {name: string; age: number}) => localStorage.setItem("username", r.name)
    );
  }


  authorize() {
    this.http
    .post("http://localhost:8080/Spring-MVC/authorize.app", {


    name: localStorage.getItem("username"),
    age: 0 
    })

    .toPromise()
    .then(r => console.log(r));


  }

}
