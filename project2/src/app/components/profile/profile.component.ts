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

  curr={ "username":JSON.parse(localStorage.getItem("current")).username,
                "description":JSON.parse(localStorage.getItem("current")).description,
                "email":JSON.parse(localStorage.getItem("current")).email,
                "profile":JSON.parse(localStorage.getItem("current")).profile,
                "birthday":JSON.parse(localStorage.getItem("current")).birthday };
  profpic:string;
  description:string=this.curr.description;
  email:string=this.curr.email;
  uname:string=this.curr.username;
  bdate:any=this.curr.birthday;

  user:any;

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
    .post("http://localhost:8080/ProjectTwo/users/updateuser.app", {
      ///change this to match the project name!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      username: form.value.username,
      password: form.value.password,
      email: form.value.email,
      profile: form.value.profile,
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
  let name=(this.router.url).substring(9);
  this.http.get("http://localhost:8080/ProjectTwo/users/getUser.app?username="+name).subscribe(data => {
        this.user = data;});
    console.log(this.user);
  // this.user= JSON.parse(localStorage.getItem(this.router.url));
  // if(this.user!=null){
  // this.profpic=this.user.profpic;
  // this.description=this.user.description;
  // this.email=this.user.email;
  // this.uname=this.user.uname;
  // this.bdate=this.user.bdate;
  // }
 
  }
  onSide():boolean{
    // console.log("My name is "+ this.router.url +" looking for"+("/profile/"+ this.curr.username));
    return (this.router.url != '/main-feed(mleft:profile)' && this.router.url === "/profile/"+ this.curr.username );
    
   }
   userProf(){
     console.log("Clicked");
     if(this.router.url ==='/main-feed(mleft:profile)'){
      let addrs= '/profile/'+localStorage.getItem("username");
      this.router.navigateByUrl(addrs);
     }
   }
   
}
