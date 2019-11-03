import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> dcbf10f77709152a875d8ec06b8e670a9b2cea2e
import { AppRoutingModule, routnComps } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProfileComponent} from './components/profile/profile.component';
import { MainFeedComponent } from './components/main-feed/main-feed.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { GoHomeComponent } from './components/go-home/go-home.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import {HttpClientModule} from '@angular/common/http';


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
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

