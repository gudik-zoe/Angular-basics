import { Component, OnInit , EventEmitter } from '@angular/core';
import { CartServiceService } from '../cart-service.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cardItems = []
  constructor(private service:CartServiceService) { }
  back = new EventEmitter()
 

//l'elemento va tolto subito
remove(id){
 this.cardItems = this.cardItems.filter(item => item.id !== id)
}
// l'elemento non va tolto fino che cambi il route
remove2(id){
  this.service.remove(id)
}

total(){
  let sum = 0
for (let i = 0 ; i < this.cardItems.length ; i++){
      sum += this.cardItems[i].price * this.cardItems[i].quantity 
}
return sum 
}


// price(id){
//   let total = 0
//     total = this.cardItems[id].price * this.cardItems[id].quantity 
//     return total
  
// }

plus(id){
this.cardItems[id].quantity++
}

minus(id){
  this.cardItems[id].quantity--
}



  
  ngOnInit() {
    this.cardItems = this.service.getCardItems()

  }

}
