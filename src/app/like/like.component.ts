import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
@Input() isActive :boolean = false;
@Input() likesCount :number = 0;
@Output() click = new EventEmitter();
clickLike(){
  this.isActive=!this.isActive;
  this.likesCount+=this.isActive? 1:-1;
  this.click.emit(this.isActive);
}
}
export interface likeArgs{
  isliked:boolean
}

