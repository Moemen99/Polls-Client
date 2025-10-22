import { AuthGuard } from './Guards/auth.guard';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', canActivate: [AuthGuard] ,pathMatch:'full', component: HomeComponent },
  { path: '',canActivate: [AuthGuard] , pathMatch: 'full' , component: HomeComponent},
  {path: 'login', pathMatch: 'full' , component: LoginComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
