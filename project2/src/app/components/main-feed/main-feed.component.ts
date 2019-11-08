import { Component, OnInit, HostListener } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";
import { HttpClient, HttpResponse, HttpEventType} from "@angular/common/http";
import { format } from 'util';



@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.scss']
})
export class MainFeedComponent implements OnInit {

  posts: object;
  constructor(private http: HttpService, private appc:AppComponent, private router:Router, private htt: HttpClient ) { }

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


//////////space for the comments to be connected to the database

    comments(form: NgForm, ){
      this.htt.post("http://localhost:8080/ProjectTwo/users//usercomments.app", {


      description: form.value.description

    
    })
  }

/////////////////// space for the likes to be connected to the database

    like(form: NgForm, ){
      this.htt.post("http://localhost:8080/ProjectTwo/users/userlikes.app", {
    // post: form.value.post,
    // time: form.value.time

    username: form.value.username
    
    
  })

    }


    @HostListener("window:scroll", []) onWindowScroll() {
      this.scrollFunction();
    }
    // When the user scrolls down 20px from the top of the document, show the button
  scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("myBtn").style.display = "block";
      } else {
          document.getElementById("myBtn").style.display = "none";
      }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  } 

  //  getPosts(){
  //   this.http.get('https://bdf3d2a6-da4b-44a7-b837-434f6845961c.mock.pstmn.io/sam/post').subscribe(data => {
  //     this.posts = data;})
  // }
}
