import { Component, OnInit } from '@angular/core';
import { NgForm}  from "@angular/forms";
import { HttpClient} from "@angular/common/http";
import { UploadFileService } from '../../services/upload-file.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;

  constructor(private http: HttpClient, private uploadService: UploadFileService) { }

   ngOnInit() { }
  /* newPost(form:NgForm) {this.http
  .post("Json Address", {
    userName: form.value.social_username,
    email:  form.value.social_email,
    password: form.value.social_password,
    date: form.value.social_birthday
  })
  .toPromise()
  .then((r:{userName:string;email:string;password:string;date:Date;}) => {
    console.log(r);
    sessionStorage.setItem("userName",JSON.stringify(r))
  })
  .catch(e => console.log(e)); 
} */
/*fileEvent(fileInput:Event){
  let file:object= file
}*/

makeid(length) {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return (result+".jpg");
}
newPost(form: NgForm){
  this.http
  .post("http://localhost:8080/ProjectTwo/users/userPosts.app", {
    description: form.value.description,
    file: form.value.file,
    post: this.makeid(15)
})
  .toPromise()
  .then((r:{description:string; post:string; file:File;}) => {
    console.log(r);
    sessionStorage.setItem("posts",JSON.stringify(r))
  })
  .catch(e => console.log(e));
}

selectedImg:File = null;

onImgSelected(event) {
  this.selectedImg = <File> event.target.files[0];
}

/* onSubmit() {
  const fd = new FormData();
  // fd.append = ('image',this.selectedImg, this.selectedImg.name);
  this.http
  .post("Form Data Address", fd)
  .subscribe (res =>{
    console.log(res);
  });
} */

selectFile(event) {
  this.selectedFiles = event.target.files;
}

}
