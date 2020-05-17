import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
arr = []
  constructor( private http:HttpClient) { }

  fetch(){
    this.http.get('https://tony-87e28.firebaseio.com/posts.json').pipe(map(
      data => {
        let array = []
        for (let key in data){
          if (data.hasOwnProperty(key)){
            array.push({...data[key], id:key})
          }
        }
        return array
        }
      )
    ).subscribe(data => {
      this.arr = data
    })
  }
      
    
  

  ngOnInit(): void {
  }

}
