import { PollService } from '../../services/poll.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-polls',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent {
   title2:string="";
  text =` Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit blanditiis hic ea mollitia magnam earum animi consectetur alias voluptas, veritatis tempora beatae nesciunt tenetur libero necessitatibus vitae quis sed. Doloribus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam optio blanditiis inventore ea illum sed dolorum reiciendis ducimus, dolor illo ex? Laborum error ipsum labore omnis aliquid obcaecati ex pariatur?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, corrupti dolore incidunt veritatis aspernatur odio nisi optio dolorem aliquam saepe sapiente dolorum maiores qui. Saepe dolore facere unde id ea?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic nam quidem delectus, corporis excepturi id, fugit eveniet laborum illum repellat, ipsa illo ab optio ad? Architecto dolor quia vel saepe.`
  title = 'Polls Goes Here'
  polls ;
  count ;
  imgUrl='https://images.unsplash.com/photo-1756680969191-a453442682f9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  colSpan = 2;
  isActive=true;
  mainColor='pink';
  emailAddress ="me@example.com";
  poll = {
    title:"My First Poll",
    rating:4.9754,
    voters:1899,
    releaseDate: new Date(2025,4,1),
    cost:190.95
  };
  constructor(pollService : PollService){
    this.polls = pollService.getPolls();
    this.count = this.polls.length
  }
  getPools(){
    return "Add your Poll Now"
  }
  onSave($event:any){
    console.log("Saved Button Was Clicked",$event);
    $event.stopPropagation();
    
  }
  clickDiv(){
    console.log('Div Clicked');
    
  }

  clickEnter(){
    console.log("Enter Clicked");
    
  }

  // clickEnterOldWay($event : any){
  //   if($event.keyCode === 13) console.log("Enter Clicked With the old way event filtering");
    
  // }

  GetValue($event :any){
    console.log($event.target.value);
    
  }

  GetValueTheNewWay(email:string){
    console.log(email);
    
  }

  bindInputData($event : any){
    console.log(this.emailAddress);
    
  }
  isFavourite : boolean = false;
  className ="regular"
  clickFavourite() {
    this.isFavourite =!this.isFavourite;
    // this.className = this.isFavourite? "solid":"regular";
    console.log('Favourite clicked:', this.isFavourite);
    
  }
 
}
