import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cardItems = [];
  constructor(private service: CartServiceService, private router: Router) {}
  //l'elemento va tolto subito
  remove(id) {
    this.service.remove(id);
    this.cardItems = this.cardItems.filter((item) => item.id !== id);
  }
  
  total() {
    return this.service.total(this.cardItems);
  }

  plusOne(id) {
    this.service.plus(id);
  }
  toStore() {
    this.router.navigate(['/products']);
  }

  minusOne(id) {
    this.service.minus(id);
  }

  purchase() {
      this.router.navigate(['/purchase'])
  }
    


  ngOnInit() {
    this.cardItems = this.service.getCardItems()
  }
}
