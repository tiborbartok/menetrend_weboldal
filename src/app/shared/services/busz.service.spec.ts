import { TestBed } from '@angular/core/testing';

import { BuszService } from './busz.service';

describe('BuszService', () => {
  let service: BuszService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuszService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
