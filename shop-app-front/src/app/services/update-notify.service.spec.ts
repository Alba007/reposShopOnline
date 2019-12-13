import { TestBed } from '@angular/core/testing';

import { UpdateNotifyService } from './update-notify.service';

describe('UpdateNotifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateNotifyService = TestBed.get(UpdateNotifyService);
    expect(service).toBeTruthy();
  });
});
