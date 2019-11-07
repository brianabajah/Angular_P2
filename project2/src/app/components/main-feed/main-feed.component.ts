import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.scss']
})
export class MainFeedComponent implements OnInit {

  posts: object;
  constructor(private http: HttpService, private appc:AppComponent, private router:Router ) { }

  ngOnInit() {
    this.http.getPosts().subscribe(data => {
      console.log(data);
      this.posts = data;
      console.log(this.posts);
      this.appc.swic();
    }
    );
  }
  navToProf(social_username: Event) {
    // use this.router.navigate(['/your-path']) to go to profile window tolowercase
    let target = social_username.target || social_username.srcElement || social_username.currentTarget;
    // @ts-ignore
    var idAttr = target.innerHTML;


    let addrs= '/profile/'+idAttr;
    this.router.navigateByUrl(addrs);
    console.log(idAttr);
  }

  comment(loginf: NgForm, ) {
    this.http.commentServ(loginf).toPromise().then((resps)=>{
      console.log(JSON.stringify(resps));
    });
    }

  //  getPosts(){
  //   this.http.get('https://bdf3d2a6-da4b-44a7-b837-434f6845961c.mock.pstmn.io/sam/post').subscribe(data => {
  //     this.posts = data;})
  // }
}
