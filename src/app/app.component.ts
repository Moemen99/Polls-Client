import { Component } from '@angular/core';
import { theChangeOnData } from './favourite/favourite.component';
import { likeArgs } from './like/like.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewMode='otherwise'
  courses = [1]
  myCourses =[
    {id:1,name:"Course1"},
    {id:2,name:"Course2"},
    {id:3,name:"Course3"},
    {id:4,name:"Course4"}
  ]
  AddCourse(){
     let addedId =this.myCourses.length 
     this.myCourses.push({id :addedId ,name:`course${addedId}` })
  }
  RemoveCourse(course:{id:number,name:string}){
    let index = this.myCourses.indexOf(course);
    this.myCourses.splice(index,1);
  }
  title = 'Client';
  post={
    myTitle: '',
    isFavourite:true,

  }
  tweet ={
    body:"here is the body of a tweet",
    isLiked:false,
    likesCount:10
  }

  changeOnFavourite(eventArgs:theChangeOnData){
    console.log("changedDataIs:",eventArgs);
    
  }
  clickOnLike(eventArgs:likeArgs){
    console.log("changedDataIs:",eventArgs);
  }

  //ngfor with trackBy example
  courseList:any;

  addCourseList(){
    this.courseList=[
      {id:1,name:"course1"},
      {id:2,name:"course2"},
      {id:3,name:"course3"},
      {id:4,name:"course4"},
      {id:5,name:"course5"},
      {id:6,name:"course6"}]
  }
  trackCourse(index:number,course:any){
    return course ? course.id : undefined;
  }

}
