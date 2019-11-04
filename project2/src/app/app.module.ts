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
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';

=======
import {HttpClientModule} from '@angular/common/http';
>>>>>>> d017746a8e0996f89da738695b3442ba69a3df04


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
    MatExpansionModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule,
    BrowserAnimationsModule,
=======
    HttpClientModule,
    FormsModule
>>>>>>> d017746a8e0996f89da738695b3442ba69a3df04
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

