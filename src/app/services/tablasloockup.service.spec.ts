import { TestBed } from '@angular/core/testing';

import { TablasloockupService } from './tablasloockup.service';

describe('TablasloockupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TablasloockupService = TestBed.get(TablasloockupService);
    expect(service).toBeTruthy();
  });
});
