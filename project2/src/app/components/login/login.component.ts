import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
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

  constructor(private http: HttpClient, private router: Router, private lognServ: LoginService) { }

  ngOnInit() { }

  login(loginf: NgForm) {
    this.lognServ.submit(loginf).toPromise().then((resps)=>{
      console.log(JSON.stringify(resps));
    })
    }


  navigateToLogin() {
    let words: string = localStorage.getItem("current");
    if (words != null && words.length > 1) {
      this.router.navigateByUrl('/main-feed');
    }
  }

}