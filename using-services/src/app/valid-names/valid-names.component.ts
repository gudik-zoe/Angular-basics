import { Component, OnInit } from '@angular/core';
import { ProvaService } from '../prova.service';

@Component({
  selector: 'app-valid-names',
  templateUrl: './valid-names.component.html',
  styleUrls: ['./valid-names.component.css'],
})
export class ValidNamesComponent implements OnInit {
  validNames;
  constructor(private service: ProvaService) {}

  ngOnInit() {
    this.validNames = this.service.validNames;
  }

  function(i, name) {
    this.service.setToInactive(i, name);
  }
}
