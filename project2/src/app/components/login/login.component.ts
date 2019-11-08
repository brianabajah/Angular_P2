import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';



// import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private lognServ: LoginService) { }

  ngOnInit() { }

  login(loginf: NgForm) {


    this.lognServ.submit(loginf).toPromise().then((resps)=>{
      localStorage.setItem("current",JSON.stringify(resps));
    });
    this.navigateToLogin();
    }

  navigateToLogin() {
    let words: string = localStorage.getItem("current");
    console.log(words);
    if (words != null && words.length > 1) {
      this.router.navigate([{outlets: {primary: 'main-feed' ,mleft: 'profile'}}]);
    }
  }

}