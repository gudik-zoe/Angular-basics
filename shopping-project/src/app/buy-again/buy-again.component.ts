import { Component, OnInit , Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-again',
  templateUrl: './buy-again.component.html',
  styleUrls: ['./buy-again.component.css']
})
export class BuyAgainComponent implements OnInit {
  constructor( private router:Router) { }

                @Input() data
  toStore(){
    this.router.navigate(['/products'])
  }

  

  ngOnInit() {
  }

}
