import { Injectable } from '@angular/core';
import { LoginForm } from './interfaces/login-form';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://mysurveybasket.runasp.net';

  constructor(private httpClient :HttpClient) { }

  login(loginForm : LoginForm) : Observable<any> {
    return this.httpClient
                .post(this.url + '/auth', loginForm);
  }
}
