import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
images = []
  constructor( private service:PostsService) { }

  ngOnInit() {
    this.images = this.service.posts
  }

}
