import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  toBuy = []

  constructor(private service:CartServiceService) { }

  ngOnInit() {
this.toBuy = this.service.getCardItems()
  }

}
