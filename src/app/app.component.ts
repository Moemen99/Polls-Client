import { Component } from '@angular/core';
import { theChangeOnData } from './favourite/favourite.component';
import { likeArgs } from './like/like.component';

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
  tweet ={
    body:"here is the body of a tweet",
    isLiked:false,
    likesCount:0
  }

  changeOnFavourite(eventArgs:theChangeOnData){
    console.log("changedDataIs:",eventArgs);
    
  }
  clickOnLike(eventArgs:likeArgs){
    console.log("changedDataIs:",eventArgs);
  }

}
