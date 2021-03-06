import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http:HttpClient) { }
  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
 
    formdata.append('file', file);
    formdata.append('username',JSON.parse(localStorage.getItem("current")).username)
 
    const req = new HttpRequest('POST', 'http://localhost:8080/ProjectTwo/upload.app', formdata, {
      reportProgress: true,
      responseType: 'text'
    });
 
    return this.http.request(req);
  }

 
  getProfilePic(): Observable<any> {
    return this.http.get('http://localhost:8080/ProjectTwo/getProfilePic.app');
  }

  getPostPic(): Observable<any> {
    return this.http.get('http://localhost:8080/ProjectTwo/getPostPic.app');
  }
}
