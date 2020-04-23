import { TestBed } from '@angular/core/testing';

import { TodosServiceService } from './todos-service.service';

describe('TodoServiceService', () => {
  let service: TodosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
