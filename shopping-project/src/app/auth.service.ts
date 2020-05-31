import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  loggedIn = []


  get(){
    return this.loggedIn
  }
  
  constructor(private http:HttpClient) { }

  signUp(email , password ){
   return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyABhEX73m0Bo5NhmFz5VA7KQsjkdNd7JYk',
    {email : email, 
    password:password ,
  returnSecureToken:true}
  )}


signIn(email , password){
   this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyABhEX73m0Bo5NhmFz5VA7KQsjkdNd7JYk',
  {email: email,
    password : password,
    returnSecureToken : true} 
    ).subscribe(data => {
      this.loggedIn.push(email)
      console.log('it worked ')},error =>{
        console.log('it didnt work' , error)
      }
      )
     
}

}