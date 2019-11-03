import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.scss']
})
export class MainFeedComponent implements OnInit {

  posts:object;
  constructor() { }

  ngOnInit() {
  }
  navToProf(social_username:string){
    // use this.router.navigate(['/your-path']) to go to profile window tolowercase
    console.log(social_username);
  }
}
