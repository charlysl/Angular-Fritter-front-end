import { TestBed } from '@angular/core/testing';

import { FreetService } from './freet.service';

describe('FreetService', () => {
  let service: FreetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
