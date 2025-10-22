import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor() { }
  getPolls(){
    return["Poll1","Poll2","Poll3"];
  }
}
