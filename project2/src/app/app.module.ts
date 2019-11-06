import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routnComps } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProfileComponent} from './components/profile/profile.component';
import { MainFeedComponent } from './components/main-feed/main-feed.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { GoHomeComponent } from './components/go-home/go-home.component';
import { CreatePostComponent } from './components/create-post/create-post.component';

import { UploadFileService } from './upload/upload-file.service';


@NgModule({
  declarations: [
    AppComponent,
    MainFeedComponent,
    SearchBarComponent,
    routnComps,
    GoHomeComponent,
    CreatePostComponent,
    ProfileComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    UploadFileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

