import { Injectable, ɵisListLikeIterable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class PostsService {

like(id){
  this.posts[id].likes = this.posts[id].likes + 1
}

comment(id , data ){
  this.posts[id].comments.push(data)
}

share(){
  window.alert('u have shared that post')
}


  posts = [
    {image:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
    description:'such a nice photo', 
    likes:20,
    comments:['first comment' , 'second comment'],
    id:0
    }
  ,{image:'https://th.tvblog.it/V6HnVTZkLCDQ7iSQDveMVZFbWW4=/fit-in/655xorig/https%3A%2F%2Fmedia.tvblog.it%2F5%2F518%2Ffriends.jpg',
  description:'', 
  likes:20,
  comments:['first comment' , 'second comment'],
  id:1
  },
  {image:'https://lh3.googleusercontent.com/proxy/iDGG93kFCi_dWMbczY9eMwquBjDtmRzwY_Is51MnWwBid-TU7JAu1oHErGAgd-HGBhzkp58K8b-ciQEynZM59sngHoo_b84OFzva1zZkml4mFxUQf7NeXFqUeuZG24N-Q0aWBwtFx7E',
  description:'such a nice game join now', 
  likes:30,
  comments:[''],
  id:2
  }

  ,]

  constructor() { }
}
