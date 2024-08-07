import { TestBed } from '@angular/core/testing';

import { BejelentesService } from './bejelentes.service';

describe('BejelentesService', () => {
  let service: BejelentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BejelentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
