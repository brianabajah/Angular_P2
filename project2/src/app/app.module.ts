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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import {RegisterComponent} from './components/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    MainFeedComponent,
    SearchBarComponent,
    routnComps,
    GoHomeComponent,
    CreatePostComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatExpansionModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

