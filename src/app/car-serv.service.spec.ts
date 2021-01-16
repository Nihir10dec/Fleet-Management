import { TestBed } from '@angular/core/testing';

import { CarServService } from './car-serv.service';

describe('CarServService', () => {
  let service: CarServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
