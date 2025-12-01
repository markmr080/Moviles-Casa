import { TestBed } from '@angular/core/testing';

import { Clicker } from './clicker_service';

describe('Clicker', () => {
  let service: Clicker;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Clicker);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
