import { Injectable } from '@angular/core';
import { LoginForm } from '../interfaces/login-form';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public url = 'http://mysurveybasket.runasp.net';
  userToken !: string;

  constructor(private httpClient :HttpClient) {
    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token') || '';
    }
   }

  login(loginForm : LoginForm) : Observable<any> {
    return this.httpClient
                .post(this.url + '/auth', loginForm);
  }

   isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }
}
