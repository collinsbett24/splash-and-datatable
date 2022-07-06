import { TestBed } from '@angular/core/testing';

import { SportsServiceService } from './sports-service.service';

describe('SportsServiceService', () => {
  let service: SportsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
