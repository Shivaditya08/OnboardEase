import { TestBed } from '@angular/core/testing';

import { CandidateSerService } from './candidate-ser.service';

describe('CandidateSerService', () => {
  let service: CandidateSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidateSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
