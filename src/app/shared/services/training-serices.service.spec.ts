import { TestBed } from '@angular/core/testing';

import { TrainingSericesService } from './training-serices.service';

describe('TrainingSericesService', () => {
  let service: TrainingSericesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingSericesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
