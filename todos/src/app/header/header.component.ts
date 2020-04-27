import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  public todos = [];

  ngOnInit(): void {}
}
