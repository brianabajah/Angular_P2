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
    if(this.router.url == '/' || this.router.url == '/reg' ){
      this.menubtn='/';
    }else{
      this.menubtn='/main-feed(mleft:profile)';
    }
  }
  btnn(){
    this.swic();
    this.router.navigate([{outlets: {primary: 'main-feed' ,mleft: 'profile'}}]);
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl("/");
    console.log("logout");
  }
  where(){
    return (this.router.url === '/' || this.router.url === '/reg');
  }
  search(){
  // @ts-ignore
  let j = document.getElementById("look").value;
  console.log(j);
    let addrs= '/profile/'+j;
    this.router.navigateByUrl(addrs);
  }
}


