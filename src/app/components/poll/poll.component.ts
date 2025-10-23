import { PollService } from 'src/app/services/poll-service.service';
import { PollRequest } from './../../interfaces/poll-request';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PollResponse } from 'src/app/interfaces/poll-response';

@Component({
  selector: 'polls',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent {
  //poll response
  pollRes : PollResponse[] = [];

  pollForm: FormGroup;
  constructor(private pollService : PollService,private fb:FormBuilder) {
    this.pollForm = this.fb.group(
      {
        title: ['',Validators.required],
        summary: ['',Validators.required],
        startsAt: ['',Validators.required],
        endsAt: ['',Validators.required]
      }
    )
  }
  
   // Load polls when component initializes
  ngOnInit() {
    this.getAllPolls();
  }
  onSubmit(){
    const pollRequest : PollRequest = {
      title : this.pollForm.get('title')?.value,
      summary: this.pollForm.get('summary')?.value,
      startsAt: this.pollForm.get('startsAt')?.value,
      endsAt: this.pollForm.get('endsAt')?.value
    };
    this.addPoll(pollRequest);
    this.getAllPolls();
  }
  
  //service calls
  getAllPolls(){
    return this.pollService.GetAllPolls().subscribe(res=>{
      this.pollRes = res as PollResponse[];
      console.log(this.pollRes);
    });
  }


  addPoll(PollRequest:PollRequest){
    this.pollService.AddPoll(PollRequest).subscribe(res=>{
      console.log(res);
    });
  
  }
}
