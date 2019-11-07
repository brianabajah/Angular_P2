import { Component, OnInit } from '@angular/core';
import { NgForm}  from "@angular/forms";
import { HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() { }
  newPost(form:NgForm) {
    this.http
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
}

selectedImg:File = null;

onImgSelected(event) {
  this.selectedImg = <File> event.target.files[0];
}

onSubmit() {
  const fd = new FormData();
  // fd.append = ('image',this.selectedImg, this.selectedImg.name);
  this.http
  .post("Form Data Address", fd)
  .subscribe (res =>{
    console.log(res);
  });
}
}
