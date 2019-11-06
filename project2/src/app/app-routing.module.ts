import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainFeedComponent } from './components/main-feed/main-feed.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },  
  { path: 'reg', component: RegisterComponent },  
  { path: 'main-feed', component: MainFeedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routnComps=[LoginComponent,RegisterComponent];