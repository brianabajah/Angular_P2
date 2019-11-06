import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  profpic:string="";
  description:string="";
  ngOnInit() {
    this.prof();
  }

  prof(){
    this.profpic=localStorage.getItem("profpic");
    this.description=localStorage.getItem("description");
      if(this.profpic==null || this.profpic.length<1){
        console.log("pic area");
      this.profpic="../../../assets/img/alt.png";
      }
      if(this.description==null || this.description.length<1){
        this.description="Description"
      }
  }
  getprof(){
    // this.prof();
  }
  
}
