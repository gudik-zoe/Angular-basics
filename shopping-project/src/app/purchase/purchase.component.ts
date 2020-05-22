import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  toBuy = []
  hello

  constructor(private service:CartServiceService , 
              private router:Router) { }


total(){
let sum = 0
for (let i = 0 ; i < this.toBuy.length ; i++){
    sum += this.toBuy[i].price * this.toBuy[i].quantity 
    }
    return sum 
}

  edit(){
    this.router.navigate(['/card'])
  }

  ngOnInit() {
this.toBuy = this.service.getCardItems() , 
this.service.pushArr.subscribe(
  data => {
    this.hello = data
  }
)
  }

}
