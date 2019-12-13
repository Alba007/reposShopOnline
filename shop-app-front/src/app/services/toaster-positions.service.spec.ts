import { TestBed } from '@angular/core/testing';

import { ToasterPositionsService } from './toaster-positions.service';

describe('ToasterPositionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToasterPositionsService = TestBed.get(ToasterPositionsService);
    expect(service).toBeTruthy();
  });
});
