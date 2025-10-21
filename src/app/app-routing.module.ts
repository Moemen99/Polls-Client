import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home',pathMatch:'full', component: HomeComponent },
  { path: '', pathMatch: 'full' , component: LoginComponent},
  {path: 'login', pathMatch: 'full' , component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
