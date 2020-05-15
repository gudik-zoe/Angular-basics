import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'using-services';
  myForm: FormGroup;
  constructor(private fb: FormBuilder ,
    private http:HttpClient) {}

     posts = []
    //  anotherPosts = []
  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['' , Validators.required],
      lastName: ['' , Validators.required],
    });
  }

  onSubmit() {
    this.http.post('https://tony-87e28.firebaseio.com/posts.json',this.myForm.value).subscribe(data => {
      console.log(data)
    })
  }

  fetchPosts(){
    this.http.get('https://tony-87e28.firebaseio.com/posts.json')
    .pipe(
      map(data => {
        let dataArray = []
        for (let key in data ){
          if (data.hasOwnProperty(key) ){
          dataArray.push({...data[key], id:key })
        }
      }
      return dataArray

      })
    ).subscribe(posts => {
      this.posts = posts

    })
    
  }
    // onSubmitAnother(){
  //   this.http.post('https://tony-87e28.firebaseio.com/postsAnother.json',this.myForm.value).subscribe(data => {
  //     console.log(data)
  //   })
  // }

  // fetchFromAnotherPosts(){
  //   this.http.get('https://tony-87e28.firebaseio.com/postsAnother.json')
  //   .pipe(
  //     map(data => {
  //       let dataArray = []
  //       for (let key in data ){
  //         if (data.hasOwnProperty(key) ){
  //         dataArray.push({...data[key], id:key })
  //       }
  //     }
  //     return dataArray

  //     })
  //   ).subscribe(posts => {
  //     this.anotherPosts = posts

  //   })
    
  // }
}
