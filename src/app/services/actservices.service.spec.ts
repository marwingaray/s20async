import { TestBed } from '@angular/core/testing';

import { ActservicesService } from './actservices.service';

describe('ActservicesService', () => {
  let service: ActservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
