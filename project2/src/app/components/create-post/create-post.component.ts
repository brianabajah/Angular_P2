import { Component, OnInit } from '@angular/core';
import { NgForm}  from "@angular/forms";
import { HttpClient, HttpResponse, HttpEventType} from "@angular/common/http";
import { UploadFileService } from '../../services/upload-file.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private http: HttpClient, private uploadService: UploadFileService) { }

  ngOnInit() { }

  //uploading img
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  
  upload() {
    this.progress.percentage = 0;
  
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
  
    this.selectedFiles = undefined;
  }
 //uploading text post 

  newPost(form:NgForm) {
    let user = JSON.parse(localStorage.getItem('current'));
    let today=new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let outpt = new Date(date+" "+time);
    console.log(outpt);
    this.http.post("http://localhost:8080/ProjectTwo/users/userposts.app", {
      description: user.username,
      post: form.value.post
    
  })
  .toPromise()
  .then((r:{post:string}) => {
    console.log(r);
    sessionStorage.setItem("userName",JSON.stringify(r))
  })
  .catch(e => console.log(e));
}

// selectedImg:File = null;

// onImgSelected(event) {
//   this.selectedImg = <File> event.target.files[0];
// }

// onSubmit() {
//   const fd = new FormData();
//   // fd.append = ('image',this.selectedImg, this.selectedImg.name);
//   this.http
//   .post("Form Data Address", fd)
//   .subscribe (res =>{
//     console.log(res);
//   });
// }
}
