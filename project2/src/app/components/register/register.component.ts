import { Component, OnInit } from '@angular/core';
import { NgForm}  from "@angular/forms";
import { HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {}

  registration(form: NgForm){
    this.http
    .post("http://localhost:8080/ProjectTwo/users/post.app", {
        ///change this to match the project name!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        username: form.value.username,
        password: form.value.password,
        email: form.value.email,
        profile: form.value.profile,
        /////this is for the profile picture
        brithday: form.value.brithday
    })
    .toPromise()
    .then((r:{userName:string;email:string;password:string;date:Date;}) => {
      console.log(r);
      sessionStorage.setItem("userName",JSON.stringify(r))
    })
    .catch(e => console.log(e));
  }

}
