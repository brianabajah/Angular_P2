import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private http: HttpClient, private router:Router) { }

  user:any={"profpic":"adress",
               "description":"description",
              "email":"email",
                "uname":"uname",
                "bdate":"bdate" };
  profpic:string;
  description:string;
  email:string;
  uname:string;
  bdate:any;

  ngOnInit() {

    this.prof();
  }

  prof(){
    this.profpic=localStorage.getItem("profpic");
    this.description=localStorage.getItem("description");
      if(this.profpic==null || this.profpic.length<1){
      this.profpic="../../../assets/img/alt.png";
      }
      if(this.description==null || this.description.length<1){
        this.description="Description";
      }
  }

  updat(form: NgForm){
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
  populateUser(){
  this.user= JSON.parse(localStorage.getItem(this.router.url));
  if(this.user!=null){
  this.profpic=this.user.profpic;
  this.description=this.user.description;
  this.email=this.user.email;
  this.uname=this.user.uname;
  this.bdate=this.user.bdate;
  }
 
  }
  onSide():boolean{
    return this.router.url != '/main-feed(mleft:profile)';
   }
   userProf(){
     
     if(this.router.url ==='/main-feed(mleft:profile)'){
      let addrs= '/profile/'+localStorage.getItem("username");
      this.router.navigateByUrl(addrs);
     }
   }
   
}
