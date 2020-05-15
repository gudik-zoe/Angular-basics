import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { HttpService } from './http.service';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
    title = 'using-services';
    myForm: FormGroup;
constructor(private fb: FormBuilder ,
            private http:HttpClient,
            private service:HttpService) {}
loading = false
posting= false
posts = []

ngOnInit() {
this.myForm = this.fb.group({
name: ['' , Validators.required],
lastName: ['' , Validators.required],
});


}
onClickFetch(){
  this.loading = true
  this.service.fetchData('https://tony-87e28.firebaseio.com/posts.json').subscribe(data => {
    this.posts = data
    this.loading = false
  })
}

  onClick(){
    this.posting = true
  this.service.postData(this.myForm.value ,'https://tony-87e28.firebaseio.com/posts.json')
  this.myForm.reset()
  this.posting = false
}

// onSubmit() {
//   this.posting = true
//   this.http.post('https://tony-87e28.firebaseio.com/posts.json',this.myForm.value)
//   .subscribe(data => {
//   console.log(data)
//   this.posting = false
//   })
//   this.myForm.reset()
// }


// fetchPosts(){
//   this.loading = true
//   this.http.get('https://tony-87e28.firebaseio.com/posts.json')
//   .pipe(
//   map(data => {
//   let dataArray = []
//     for (let key in data ){
//       if (data.hasOwnProperty(key) ){
//         dataArray.push({...data[key], id:key })
//       }
//     }
//   return dataArray
//   })
//   ).subscribe(posts => {
//   this.loading = false
//   this.posts = posts

// })

// }




  
}


