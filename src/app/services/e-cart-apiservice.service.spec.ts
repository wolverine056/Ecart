import { TestBed } from '@angular/core/testing';

import { ECartAPIserviceService } from './e-cart-apiservice.service';

describe('ECartAPIserviceService', () => {
  let service: ECartAPIserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ECartAPIserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
