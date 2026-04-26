import { TestBed } from '@angular/core/testing';

import { Valuation } from './valuation';

describe('Valuation', () => {
  let service: Valuation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Valuation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
