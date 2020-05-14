import { Component, OnInit } from '@angular/core';
import { TodosServiceService } from '../todos-service.service';

@Component({
  selector: 'app-un-done-todos',
  templateUrl: './un-done-todos.component.html',
  styleUrls: ['./un-done-todos.component.css']
})
export class UnDoneTodosComponent implements OnInit {
  unDoneTodos = []

  constructor(private newService:TodosServiceService) { }

  ngOnInit() {
    this.newService.takeTodos.subscribe(
      data => {
        this.unDoneTodos = data
      }
    )
  }

}
