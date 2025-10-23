import { Injectable } from '@angular/core';
import { PollRequest } from '../interfaces/poll-request';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor( private _authService : AuthService,private httpClient :HttpClient) { }

  AddPoll(pollRequest: PollRequest): Observable<any> {
    const token = this._authService.userToken;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.httpClient
                .post(this._authService.url + '/api/polls', pollRequest, { headers: headers });

  }
  GetAllPolls() : Observable<any> {
    const token = this._authService.userToken;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.httpClient
    .get(this._authService.url + '/api/polls', 
      { headers: headers }
    );
  }
  GetPollById(){}
  DeletePollById(){}
  UpdatePollById(){}
}
