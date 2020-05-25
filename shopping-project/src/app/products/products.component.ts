import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products = [];
  cardItems = [];
  constructor(private service: CartServiceService) {}

  add(id) {
    this.service.add(id);
  }

  ngOnInit() {
    this.products = this.service.getProducts();
  }
}
