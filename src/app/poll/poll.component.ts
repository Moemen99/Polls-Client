import { PollService } from './../poll.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-polls',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent {
  title = 'Polls Goes Here'
  polls ;
  count ;
  imgUrl='https://images.unsplash.com/photo-1756680969191-a453442682f9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  colSpan = 2;
  constructor(pollService : PollService){
    this.polls = pollService.getPolls();
    this.count = this.polls.length
  }
  getPools(){
    return "Add your Poll Now"
  }
}
