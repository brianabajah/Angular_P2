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
    .post("Json Address", {
      userName: form.value.social_username,
      email:  form.value.social_email,
      password: form.value.social_password,
      date: form.value.social_birthday
    })
    .toPromise()
    .then((r:{userName:string;email:string;password:string;date:Date;}) => {
      console.log(r);
      sessionStorage.setItem("userName",JSON.stringify(r))
    })
    .catch(e => console.log(e));
  }

}
