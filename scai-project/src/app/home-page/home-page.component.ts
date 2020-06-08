import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
posts = []
data
  constructor( private service:PostsService) { }
  likeBtn = false
  showComment = false

  like(id){
    if (this.likeBtn == false){
    this.service.like(id)
    this.likeBtn = true
    }else {
      this.service.disLike(id)
      this.likeBtn = false
    }
    
  }

  comment(id , data){
     this.service.comment(id , data)
     this.showComment = true
     this.data = null
  }

  ngOnInit() {
    this.posts = this.service.posts
  }

}
