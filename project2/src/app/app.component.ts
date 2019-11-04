import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router ) {

  }
  title = 'project2';
  menubtn:string="/"

  swic():void{
    console.log(this.router.url);
    if(this.router.url === '/' || this.router.url === '/reg' ){
      this.menubtn='/';
    }else{
      this.menubtn='/main-feed';
    }
  }
  btnn(){
    this.swic();
    this.router.navigateByUrl(this.menubtn);
  }

}


