import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from './cart-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private service: CartServiceService) {}
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  products = [];
  title = 'shopping-project';

  goToCard() {
    this.router.navigate(['/card']);
  }

  ngOnInit() {
    this.products = this.service.getCardItems();
  }
}
