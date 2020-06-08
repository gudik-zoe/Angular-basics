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

  like(id){
    this.service.like(id)
  }

  comment(id , data){
     this.service.comment(id , data)
  }

  ngOnInit() {
    this.posts = this.service.posts
  }

}
