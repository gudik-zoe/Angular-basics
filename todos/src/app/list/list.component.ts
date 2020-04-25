import { Component, OnInit } from '@angular/core';
import { OrganizerServiceService } from '../organizer-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  doneitems;
  undoneitems;
  constructor(private organierService: OrganizerServiceService) {}

  ngOnInit() {
    this.doneitems = this.organierService.getdoneItems();
    this.undoneitems = this.organierService.getundoneItems();
  }
}
