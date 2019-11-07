import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { NgForm } from '@angular/forms';
import { UploadFileService } from '../../services/upload-file.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;

  constructor(private http: HttpClient, private uploadService: UploadFileService) { }
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

  updat(form: NgForm){
    this.http
    .post("http://localhost:8080/ProjectTwo/users/post.app", {
      ///change this to match the project name!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      username: form.value.username,
      password: form.value.password,
      email: form.value.email,
      profile: form.value.profile,
      /////this is for the profile picture
      brithday: form.value.brithday
  })
    .toPromise()
    .then((r:{userName:string;email:string;password:string;date:Date;}) => {
      console.log(r);
      sessionStorage.setItem("userName",JSON.stringify(r))
    })
    .catch(e => console.log(e));
  }
  
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

}
