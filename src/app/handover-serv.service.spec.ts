import { TestBed } from '@angular/core/testing';

import { HandoverServService } from './handover-serv.service';

describe('HandoverServService', () => {
  let service: HandoverServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandoverServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
