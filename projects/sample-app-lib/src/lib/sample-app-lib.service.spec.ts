import { TestBed } from '@angular/core/testing';

import { SampleAppLibService } from './sample-app-lib.service';

describe('SampleAppLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleAppLibService = TestBed.get(SampleAppLibService);
    expect(service).toBeTruthy();
  });
});
