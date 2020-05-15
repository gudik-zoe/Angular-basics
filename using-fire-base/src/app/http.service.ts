import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
 

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor( private http:HttpClient) { }
  
  postData(data , url){
    this.http.post(url,data).subscribe(data => {
        console.log(data)
      })
      console.log('its the service')
  }
  fetchData(url){
    console.log('hey its the service here')
    return this.http.get(url).pipe(map(
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
    )
    
  }

}



