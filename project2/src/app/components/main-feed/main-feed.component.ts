import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';


@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.scss']
})
export class MainFeedComponent implements OnInit {

  posts: object;
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getPosts().subscribe(data => {
      this.posts = data;
      console.log(this.posts);
      this.accordion();
    }
    );
  }
  navToProf(social_username: Event) {
    // use this.router.navigate(['/your-path']) to go to profile window tolowercase
    let target = social_username.target || social_username.srcElement || social_username.currentTarget;
    var idAttr = target.innerHTML;
    console.log(idAttr);
  }

  accordion(btm:Event) {
        let target = btm.target || btm.srcElement || btm.currentTarget;
        let panel = target.nextElementSibling;
        
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      }
  // getPosts(){
  //   this.http.get('https://bdf3d2a6-da4b-44a7-b837-434f6845961c.mock.pstmn.io/sam/post').subscribe(data => {
  //     this.posts = data;})
  // }
}
