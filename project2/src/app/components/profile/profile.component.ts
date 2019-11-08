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
  profpic:string;
  curr={ "username":JSON.parse(localStorage.getItem("current")).username,
                "description":JSON.parse(localStorage.getItem("current")).description,
                "email":JSON.parse(localStorage.getItem("current")).email,
                "profile":JSON.parse(localStorage.getItem("current")).profile,
                "birthday":JSON.parse(localStorage.getItem("current")).birthday };
  profile:string=this.curr.profile;
  description:string=this.curr.description;
  email:string=this.curr.email;
  uname:string=this.curr.username;
  bdate:any=this.curr.birthday;

  user:any;

  ngOnInit() {
    this.prof();
  }

  prof(){
    // this.profpic=this.profile;
    let name=(this.router.url).substring(9);
    this.profpic ="https://s3.us-east-2.amazonaws.com/mothra.co/Images/" + this.uname + ".jpeg";
    // this.description=localStorage.getItem("description");
    console.log(this.router.url);
      if(this.router.url==="/main-feed(mleft:profile)"){
      this.profpic="https://s3.us-east-2.amazonaws.com/mothra.co/Images/" + this.uname + ".jpeg";
      }
      else{
        this.profpic="https://s3.us-east-2.amazonaws.com/mothra.co/Images/" + name + ".jpeg";
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
  // let name=(this.router.url).substring(9);
  // this.http.post("http://localhost:8080/ProjectTwo/users/getUser.app?username="+name).subscribe(data => {
  //       this.user = data;});
  //   console.log(this.user);
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
      let addrs= '/profile/'+this.uname;
      this.router.navigateByUrl(addrs);
     }
   }
   
}
