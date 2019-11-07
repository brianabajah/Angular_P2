import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';



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

//   saveInSession(key, val): void {
//     console.log('recieved= key:' + key + 'value:' + val);
//     this.storage.set(key, val);
//     this.data[key]= this.storage.get(key);
//    }

   
// getFromSession(key): void {
//     console.log('recieved= key:' + key);
//     this.data[key]= this.storage.get(key);
//     console.log(this.data);
//    }

}


