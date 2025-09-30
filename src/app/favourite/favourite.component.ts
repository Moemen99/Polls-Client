import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {
  // now isFavourite can take data from outside of the favourite component
@Input() isFavourite : boolean = false;
// @Output() change= new EventEmitter();
@Output('click') change= new EventEmitter(); // Aliasing output properties
  className ="regular"
  clickFavourite() {
    this.isFavourite =!this.isFavourite;
    // this.className = this.isFavourite? "solid":"regular";
    this.change.emit(this.isFavourite);
    console.log('Favourite clicked:', this.isFavourite);
  }
}
export interface theChangeOnData{
  newValue:boolean
} 
