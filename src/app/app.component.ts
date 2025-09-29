import { Component } from '@angular/core';
import { theChangeOnData } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Client';
  post={
    myTitle: '',
    isFavourite:true,

  }

  changeOnFavourite(eventArgs:theChangeOnData){
    console.log("changedDataIs:",eventArgs);
    
  }
}
