import { TestBed } from '@angular/core/testing';

import { OplmService } from './oplm.service';

describe('OplmService', () => {
  let service: OplmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OplmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
