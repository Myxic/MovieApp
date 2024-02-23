/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CachedDataService } from './cached-data.service';

describe('Service: CachedData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CachedDataService]
    });
  });

  it('should ...', inject([CachedDataService], (service: CachedDataService) => {
    expect(service).toBeTruthy();
  }));
});
