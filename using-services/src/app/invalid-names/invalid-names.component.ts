import { Component, OnInit } from '@angular/core';
import { ProvaService } from '../prova.service';

@Component({
  selector: 'app-invalid-names',
  templateUrl: './invalid-names.component.html',
  styleUrls: ['./invalid-names.component.css'],
})
export class InvalidNamesComponent implements OnInit {
  invalidNames = [];
  constructor(private service: ProvaService) {}

  function(name, i) {
    this.service.setToActive(name, i);
  }
  ngOnInit() {
    this.invalidNames = this.service.invalidNames;
  }
}
