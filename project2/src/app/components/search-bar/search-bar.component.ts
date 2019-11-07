import { Component, OnInit } from '@angular/core';
import { NgForm}  from "@angular/forms";
import { HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {}

  registration(form: NgForm){
    this.http
    .post("http://localhost:8080/ProjectTwo/users/search.app", {
        ///change this to match the project name!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        username: form.value.username,
    
    })
    .toPromise()
    .then((r:{userName:string;email:string;password:string;date:Date;}) => {
      console.log(r);
      sessionStorage.setItem("userName",JSON.stringify(r))
    })
    .catch(e => console.log(e));
  }

}
