import { Component, OnInit } from '@angular/core';
import { HttpClient ,HttpEvent, HttpRequest} from "@angular/common/http";
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  posts:object=JSON.parse(localStorage.getItem("posts"));
  constructor(private http: HttpClient, private router:Router) { }
  profpic:string;
  curr={ "username":JSON.parse(localStorage.getItem("current")).username,
                "password":JSON.parse(localStorage.getItem("current")).password,
                "description":JSON.parse(localStorage.getItem("current")).description,
                "email":JSON.parse(localStorage.getItem("current")).email,
                "profile":JSON.parse(localStorage.getItem("current")).profile,
                "birthday":JSON.parse(localStorage.getItem("current")).birthday };
  password:string=this.curr.password;
  profile:string=this.curr.profile;
  description:string=this.curr.description;
  email:string=this.curr.email;
  uname:string=this.curr.username;
  bdate:any=this.curr.birthday;

  user:any;

  ngOnInit() {
    this.prof();
    this.populateUser();
    // fxn change descp from curr to user when not in main
  }

  prof(){
    let name=(this.router.url).substring(9);
    console.log(this.router.url);
      if(this.router.url==="/main-feed(mleft:profile)"){
      this.profpic="https://s3.us-east-2.amazonaws.com/mothra.co/Profile/" + this.uname + ".jpeg";
      }
      else{
        this.profpic="https://s3.us-east-2.amazonaws.com/mothra.co/Profile/" + name + ".jpeg";
      }
  }

  updat(form: NgForm){
    let usernam:string= form.value.username ;
    let passwor:string =form.value.password;
    let emai:string= form.value.email;
    let profil:string= form.value.profile;
    let birthda:string =form.value.birthday;
    let descriptio:string = form.value.description;



    this.http
    .post("http://localhost:8080/ProjectTwo/users/updateuser.app", {
      ///change this to match the project name!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      username: usernam.length<=0?this.uname:form.value.username,
      password: passwor.length<=0?this.password:form.value.password,
      email: emai.length<=0?this.email:form.value.email,
      birthday: birthda==null?this.bdate:form.value.birthday,
      description: descriptio.length<=0?this.description:form.value.description
  })
    .toPromise()
    .then((r:{userName:string;email:string;password:string;date:Date;}) => {
      console.log(r);
      sessionStorage.setItem("userName",JSON.stringify(r))
    })
    .catch(e => console.log(e));
  }

  getnowUser():string{
    return (this.router.url).substring(9);
  }
  populateUser(){
  let pName:string=(this.router.url).substring(9);
  const formdata: FormData = new FormData(); 
  formdata.append('jina', pName);
  const req = new HttpRequest('POST', 'http://localhost:8080/ProjectTwo/users/getUser.app', formdata, {
    reportProgress: true,
    responseType: 'json'
  });
  console.log(req);
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
