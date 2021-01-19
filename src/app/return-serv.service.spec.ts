import { TestBed } from '@angular/core/testing';

import { ReturnServService } from './return-serv.service';

describe('ReturnServService', () => {
  let service: ReturnServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturnServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
