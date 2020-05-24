import { Component, OnInit , EventEmitter } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  tony = 'hey'

  cardItems = []
  constructor(private service:CartServiceService ,
              private router:Router) { }
  

//l'elemento va tolto subito
remove(id){
// this.service.remove(id)
 this.cardItems = this.cardItems.filter(item => item.id !==id)
}
// l'elemento non va tolto fino che cambi il route
// remove2(id){
//   this.service.remove(id)
// }

total(){
  let sum = 0
for (let i = 0 ; i < this.cardItems.length ; i++){
      sum += this.cardItems[i].price * this.cardItems[i].quantity 
}
return sum 
}

plusOne(id){
this.service.plus(id)
}
toStore(){
  this.router.navigate(['/products'])
}

minusOne(id){
  this.service.minus(id)
}


purchase(){
   this.router.navigate(['/purchase'])

}
  
  ngOnInit() {
    this.cardItems = this.service.getCardItems()

  }

}
