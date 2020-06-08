import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts = ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg','https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg','https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg']

  constructor() { }
}
