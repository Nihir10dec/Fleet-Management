import { TestBed } from '@angular/core/testing';

import { BillingServService } from './billing-serv.service';

describe('BillingServService', () => {
  let service: BillingServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillingServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
