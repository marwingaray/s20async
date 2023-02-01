import { TestBed } from '@angular/core/testing';

import { ActinterceptorService } from './actinterceptor.service';

describe('ActinterceptorService', () => {
  let service: ActinterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActinterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
